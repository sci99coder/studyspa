var mvs = []
var spa = {
  add: function (fn) {
    if (typeof fn === 'function') {
      mvs.push(fn)
    }
  },
  dispatch: function (context) {
    var index = 0
    console.log(context)
    var next = function () {
      var mw = mvs[index]
      index++
      if (mw) {
        return mw(context, next)
      }
    }
    next()
  }
}
export {
  spa
}
