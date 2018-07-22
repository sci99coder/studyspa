export function rest (option) {
  var matchers = option.matchers || []
  matchers.forEach((ele, index, list) => {
    list[index] = str2matcher(ele)
  })
  // 字符串转化为匹配规则
  function str2matcher (url) {
    var ret = {
      url: url,
      keys: []
    }
    var reg = url.replace(/:(.+?)(?=\/|$)/g, function ($1, $2) {
      ret.keys.push($2)
      return '([^/]+?)'
    })
    ret.matcher = new RegExp('^' + reg + '$', 'gi')
    return ret
  }
  // 获取参数 转化为对象
  function getParams (path) {
    var ret = {}
    matchers.find(item => {
      var res = item.matcher.exec(path)
      if (res) {
        item.keys.forEach((key, index) => {
          ret[key] = res[index + 1] || ''
        })
        return true
      }
    })
    return ret
  }
  return function (context, next) {
    // var req = context.request
    // req.restParam = getParams(req.pathname)
    // if (req.hash) {
    //   var hash = new URL(req.hash.substr(1), req.origin)
    //   context.hash = hash
    //   hash.restParam = getParams(hash.pathname)
    // }
    this.exec = function (context) {
      // overwrite request by hash
      let req = context.request
      let hash = new URL(
        req.hash.substr(1),
        req.origin
      )
      context.request = hash
      hash.restParams = getParams(
        hash.pathname
      )
    }
  }
}
