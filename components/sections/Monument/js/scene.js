import * as THREE from 'three'

class Scene {
  constructor (screen) {
    this.THREE = THREE
    this.scene = new THREE.Scene()
    this.screen = screen
    this.init()
  }

  init () {
    this.initLight()
    this.initCamera()
  }

  initLight () {
    this.light = new this.THREE.DirectionalLight('#ffffff', 0.9)
    this.light.position.set(-20, 0, 100)
    this.scene.add(this.light)
  }

  initCamera () {
    this.camera = new this.THREE.PerspectiveCamera(90, this.screen.w() / this.screen.h(), 0.1, 1000)
    this.camera.position.z = 5
  }

  setLayer (id) {
    this.camera.layers.enable(id)
    this.light.layers.enable(id)
  }
}

export default Scene
