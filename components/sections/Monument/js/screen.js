
class Screen {
  constructor (canvasId) {
    this.canvas = document.getElementById(canvasId)
  }

  w () {
    return this.canvas.offsetWidth
  }

  h () {
    return this.canvas.offsetHeight
  }
}

export default Screen
