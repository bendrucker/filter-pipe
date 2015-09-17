'use strict'

var test = require('tape')
var filter = require('./')

test(function (t) {
  t.plan(3)

  t.equal(filter(gt2, gt3, gt4)(3), undefined)

  function gt2 (value) {
    t.pass('3 > 2')
    return true
  }

  function gt3 (value) {
    t.pass('filtered here')
    return false
  }

  function gt4 (value) {
    t.fail('value !> 4')
  }
})

