export class Module {
  constructor (config) {
    this._parent = config || document.body
  }
  build (options) {
    this._body = document.createElement('div')
    this._parent.appendChild(this._body)
  }
  show (context) {
    console.log(context)
    console.log(this)
    if (this._body) {
      console.log('ok')
      this._parent.appendChild(this._body)
    }
  }
  refresh (context) {

  }
  hide () {
    var fragment = document.createDocumentFragment()
    if (this._body) {
      fragment.appendChild(this._body)
    }
  }
  destory () {}
}

export function router (options) {
  var routes = options.routes || {}
  var current = null

  function redirect (path) {
    window.location.hash = path
  }
  return function (context, next) {
    var name = context.request.hash.split('#').join('')
    var module = routes[name]
    if (!module) {
      redirect('/404')
      return
    }
    if (!(module instanceof Module)) {
      module = new Module()
      routes[name] = module
      module.build(context)
    }
    if (module === current) {
      module.refresh(context)
    } else {
      if (current) {
        current.hide()
      }
      current = module
      current.show(context)
    }
    // next();
  }
}
