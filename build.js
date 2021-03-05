#!/usr/bin/env node

var fs = require("fs")
var { build } = require("moduloze")

var srcPath = "./documents_pb.js"
var moduleContents = fs.readFileSync(srcPath, { encoding: "utf-8" })

var config = {
  buildESM: true,
}

var depMap = {
  // what should I put here?
}

var { esm } = build(config, srcPath, moduleContents, depMap)

fs.writeFileSync("out.js", esm.code, function (err) {
  if (err) {
    console.error("error writing file")
  } else {
    console.log("build successful! 🎉")
  }
})
