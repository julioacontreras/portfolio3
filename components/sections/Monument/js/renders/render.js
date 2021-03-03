import * as THREE from 'three'

class Render {
  constructor (screen) {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.debug.checkShaderErrors = false
    screen.canvas.appendChild(this.renderer.domElement)
  }

  render () {
    this.renderer.render()
  }
}

export default Render
