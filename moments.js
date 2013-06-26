"use strict"

var cwise = require("cwise")
var cached = []

function genMomentFunc(n) {
  var pre = []
  for(var i=0; i<n; ++i) {
    pre.push("this.m" + i + " = 0.0")
  }
  var body = ["var x = a, y = a", "this.m0 += x"]
  for(var i=1; i<n; ++i) {
    body.push("x *= y")
    body.push("this.m" + i + " += x")
  }
  var post = ["return [this.m0",]
  for(var i=1; i<n; ++i) {
    post.push(",this.m" + i)
  }
  post.push("]")
  return cwise({
    args: ["array"],
    pre: new Function(pre.join("\n")),
    body: new Function("a", body.join("\n")),
    post: new Function(post.join("\n"))
  })
}

module.exports = function computeMoments(n, array) {
  var mgf
  if(n in cached) {
    mgf = cached[n]
  } else {
    mgf = genMomentFunc(n)
    cached[n] = mgf
  }
  var moments = mgf(array)
    , denom = array.size
  for(var i=0; i<n; ++i) {
    moments[i] /= denom
  }
  return moments
}


