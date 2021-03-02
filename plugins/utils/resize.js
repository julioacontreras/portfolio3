(() => {
  const throttle = (type, name, obj) => {
    obj = obj || window
    let running = false
    const func = () => {
      if (running) { return }
      running = true
      requestAnimationFrame(() => { // eslint-disable-line
        obj.dispatchEvent(new CustomEvent(name)) // eslint-disable-line
        running = false
      })
    }
    obj.addEventListener(type, func)
  }
  /* init - you can init any event */
  throttle('resize', 'optimizedResize')
})()
