<template>
  <div>
    <!-- eslint-disable -->
    <div id="canvas3D"></div>
    <script id="fragmentShader" type="x-shader/x-fragment">
      uniform float time;
      uniform float fogDensity;
      uniform vec3 fogColor;
      uniform sampler2D texture1;
      uniform sampler2D texture2;
      varying vec2 vUv;
      void main( void ) {
        vec2 position = - 1.0 + 2.0 * vUv;
        vec4 noise = texture2D( texture1, vUv );
        vec2 T1 = vUv + vec2( 1.5, - 1.5 ) * time * 0.02;
        vec2 T2 = vUv + vec2( - 0.5, 2.0 ) * time * 0.01;

        T1.x += noise.x * 2.0;
        T1.y += noise.y * 2.0;
        T2.x -= noise.y * 0.2;
        T2.y += noise.z * 0.2;

        float p = texture2D( texture1, T1 * 2.0 ).a;

        vec4 color = texture2D( texture2, T2 * 2.0 );
        vec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );

        if( temp.r > 1.0 ) { temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }
        if( temp.g > 1.0 ) { temp.rb += temp.g - 1.0; }
        if( temp.b > 1.0 ) { temp.rg += temp.b - 1.0; }

        gl_FragColor = temp;

        float depth = gl_FragCoord.z / gl_FragCoord.w;
        const float LOG2 = 1.442695;
        float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );
        fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );

        gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
      }
    </script>
    <script id="vertexShader" type="x-shader/x-vertex">
      uniform vec2 uvScale;
      varying vec2 vUv;

      void main() {
        vUv = uvScale * uv;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * mvPosition;
      }
    </script>
  </div>
</template>

<script>
import * as THREE from 'three'

import Scene from './js/scene'
import Monument from './js/objects/monument'
import Render from './js/renders/render'
import Effects from './js/renders/effects'
import Force from '~/plugins/utils/force.js'

require('~/plugins/utils/resize.js')

export default {
  mounted () {
    this.$vars = {}
    this.$vars.mouse = new THREE.Vector2()

    this.initScene()
    this.initRender()
    this.initObjects()
    this.initInteractions()
  },
  methods: {
    initScene () {
      this.$vars.scene = new Scene()
    },
    initRender () {
      this.$vars.render = new Render()
      this.$vars.render.renderer.autoClear = false
      this.$vars.render.renderer.setClearColor(0x090418)
      this.$vars.effects = new Effects(this.$vars.render, this.$vars.scene)
    },
    initObjects () {
      const self = this
      this.$vars.monument = new Monument(Force, (mesh) => {
        self.$vars.scene.scene.add(mesh)
      })
    },
    initInteractions () {
      const self = this

      // mousemove on screen
      document.addEventListener('mousemove', (event) => {
        event.preventDefault()
        self.$vars.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
        self.$vars.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
        self.$vars.monument.acumulateForces(self.$vars.mouse.x, self.$vars.mouse.y)
      }, false)

      // click anywhere on screen
      document.addEventListener('click', (e) => {
        self.$vars.effects.glitchPass.enabled = true
        setTimeout(() => {
          self.$vars.effects.glitchPass.enabled = false
        }, 500)
      })

      // resize screen
      const onWindowResize = () => {
        self.$vars.scene.camera.aspect = window.innerWidth / window.innerHeight
        self.$vars.scene.camera.updateProjectionMatrix()
        self.$vars.render.renderer.setSize(window.innerWidth, window.innerHeight)
        self.$vars.effects.composer.setSize(window.innerWidth, window.innerHeight)
        self.$vars.monument.resize(window.innerWidth)
      }
      onWindowResize()
      window.addEventListener('optimizedResize', onWindowResize)

      // render screen
      const renderScene = () => {
        const delta = 5 * clock.getDelta()
        self.$vars.monument.update(delta)
        self.$vars.effects.composer.render()
      }
      const clock = new THREE.Clock()
      const loop = () => {
        requestAnimationFrame(loop)
        renderScene()
      }
      loop()
    }
  }
}
</script>
