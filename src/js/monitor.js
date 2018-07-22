function Monitor (obj) {
  obj = obj || {}
  var last = null
  var urlChange = function () {
    var url = window.location.href
    if (url !== last) {
      var event = {
        oldval: last,
        newval: url
      }
      last = url
      if (typeof obj.onchange === 'function') {
        obj.onchange(event)
      }
    }
  }
  this.start = function () {
    setInterval(urlChange, 200)
  }
}
export {
  Monitor
}
