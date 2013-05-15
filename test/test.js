"use strict"

var ndarray = require("ndarray")
var moments = require("../moments.js")

require("tap").test("ndarray-moments", function(t) {
  var x = ndarray(new Float64Array([1, 2, 5, -10]))
  var m = moments(2, x)
  t.equals(m[0], -0.5)
  t.equals(m[1], 32.5)
  t.end()
})