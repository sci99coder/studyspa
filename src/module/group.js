import {Module} from '../js/router.js'

// 班级展示模块
export class Group extends Module {
  build (options) {
    super.build(options)
    this._body = document.createElement('div')
    this._node = document.createElement('h3')
    this._body.appendChild(this._node)
    console.log('ok')
    this._parent.appendChild(this._body)
  }
  show (context) {
    super.show(context)
    // var req = context.request;
    this._update('coding')
  }
  refresh (context) {
    super.refresh(context)
    // var req = context.request
    this._update()
  }
  _update (uid) {
    this._parent.innerHTML = `<a class="btn" type="button" href="#/user/">用户</a>
        <a class="btn" type="button" href="#/group/">分组</a><p>欢迎来到云课堂，前端进阶班</p>`
  }
}

var app = document.getElementById('app')
var group = new Group(app)
export {group}
