'use strict'

var test = require('tape')
var filter = require('./')

test(function (t) {
  t.plan(3)

  t.equal(filter(gt2, gt3, gt4)(3), undefined)

  function gt2 (value) {
    t.equal(value, 3)
    return true
  }

  function gt3 (value) {
    t.equal(value, 3)
    return false
  }

  function gt4 (value) {
    t.fail('value !> 4')
  }
})

