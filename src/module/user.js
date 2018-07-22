import {Module} from '../js/router.js'

// 用户展示模块
export class User extends Module {
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
    this._updateUser()
  }
  refresh (context) {
    super.refresh(context)
    // var req = context.request
    this._updateUser()
  }
  _updateUser (uid) {
    // var _this = this
    this._parent.innerHTML = `<a class="btn" type="button" href="#/user/">用户</a>
        <a class="btn" type="button" href="#/group/">分组</a><p>大家好，我是用户</p>`
  }
}
var app = document.getElementById('app')
var user = new User(app)
export {user}
