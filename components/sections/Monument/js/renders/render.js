import * as THREE from 'three'

class Render {
  constructor () {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    document.getElementById('canvas3D').appendChild(this.renderer.domElement)
  }

  render () {
    this.renderer.render()
  }
}

export default Render
