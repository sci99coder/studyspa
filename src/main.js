import {
  start
} from './app.js'
import {
  user
} from './module/user.js'
import {
  group
} from './module/group.js'
import {
  notFound
} from './module/404.js'
start({
  matchers: [
    '/user/:id',
    '/group/:gid/user/:uid'
  ],
  rules: [{
    matcher: /\/group\/[\d]+\/user\/[\d]+\//i,
    target: '/user/'
  }],
  routes: {
    '/user/': user,
    '/group/': group,
    '/404': notFound
  }
})
