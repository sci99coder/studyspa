import {
  Module
} from '../js/router.js'

export class NotFound extends Module {
  build (options) {
    super.build(options)
    this._body = document.createElement('div')
    this._node = document.createElement('h3')
    this._body.appendChild(this._node)
    this._parent.appendChild(this._body)
  }
  show (context) {
    super.show(context)
    // var req = context.request
    this._update()
  }
  refresh (context) {
    super.refresh(context)
    // var req = context.request
    this._update()
  }
  _update (uid) {
    this._parent.innerHTML = `<p>啊哦,这个页面找不到了</p><a href="/#/user/">点我返回</a>`
  }
}
var app = document.getElementById('app')
var notFound = new NotFound(app)
export {
  notFound
}
