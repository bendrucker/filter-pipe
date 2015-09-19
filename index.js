'use strict'

var toArray = require('to-array')

module.exports = filterPipe

function filterPipe (fns) {
  if (!fns) throw new TypeError('At least one function is required')
  if (!Array.isArray(fns)) return filterPipe(toArray(arguments))
  return function filterPipeline (value) {
    for (var i = 0; i < fns.length; i++) {
      if (!fns[i](value)) return
    }
  }
}
