import {
  Monitor
} from './js/monitor.js'
import {
  spa
} from './js/spa.js'
import {
  rest
} from './js/reset.js'
import {
  rewrite
} from './js/rewrite.js'
// import {
//   filter
// } from './js/filter.js'
import {
  router
} from './js/router.js'

export function start (options) {
  spa.add(rest(options))
  spa.add(rewrite(options))
  // spa.add(filter.mw)
  // filter.add(AuthFilter);
  spa.add(router(options))
  var monitor = new Monitor({
    onchange: function (event) {
      var context = {
        request: new URL(event.newval)
      }
      spa.dispatch(context)
    }
  })
  monitor.start()
}
