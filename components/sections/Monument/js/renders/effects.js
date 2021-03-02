import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'

class Effects {
  constructor (render, scene) {
    // init effects
    this.filmPass = new FilmPass(0.35, 0.95, 2048, false)
    this.bloomPass = new BloomPass(1.25)
    this.glitchPass = new GlitchPass()
    this.glitchPass.renderToScreen = true
    this.glitchPass.goWild = true
    this.glitchPass.enabled = false
    this.renderScene = new RenderPass(scene.scene, scene.camera)

    // init composer
    this.composer = new EffectComposer(render.renderer)
    this.composer.addPass(this.renderScene)
    this.composer.addPass(this.glitchPass)
    this.composer.addPass(this.bloomPass)
    this.composer.addPass(this.filmPass)
  }
}

export default Effects
