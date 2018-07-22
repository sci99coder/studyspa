export function rewrite (options) {
  var rules = options.rules || []
  rules.forEach(item => {
    // 格式化重定向的目标
    var target = item.target
    if (typeof target !== 'function') {
      item.target = function (context) {
        return target
      }
    }
    // 格式化重定向匹配规则
    var matcher = item.matcher
    if (typeof matcher === 'function') {
      return
    }
    if (typeof matcher === 'string') {
      item.matcher = function (context) {
        return context.request.pathname === matcher
      }
      return
    }
    if (matcher instanceof RegExp) {
      item.matcher = function (context) {
        return matcher.test(context.request.pathname)
      }
    }
  })

  return function (context, next) {
    var ret = rules.find(item => {
      return item.matcher(context)
    })
    if (ret) {
      var target = ret.target(context)
      context.request.pathname = target
      if (context.hash) {
        context.hash.pathname = target
      }
    }
    next()
  }
}
