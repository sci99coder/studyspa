import {
  Monitor
} from '@/js/monitor.js'

describe('Monitor', function () {
  describe('#start', function () {
    it('should be ok to start monitor', function (done) {
      let source = {
        test: ''
      }
      let inst = new Monitor({
        key: 'test',
        interval: 50,
        onchange: function (val) {
          expect(val.newValue).to.equal(url)
          done()
        }
      })
      inst.start()
      var value = 'test'
      window.location.hash = value
      var url = window.location.host + value
      source.test = value
    })
  })
})
