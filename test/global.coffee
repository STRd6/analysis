{loadFile} = require "../util"

nodes = (source) ->
  CoffeeScript.nodes source

tokens = (source) ->
  CoffeeScript.tokens source
  
compile = (source) ->
  CoffeeScript.compile source

describe "global detection", ->
  it "should detect globals", ->
    result = compile loadFile "samples/local.coffee"

    console.log result

describe "JSHint", ->
  it "should lint stuff", ->
    code = compile loadFile "samples/global.coffee"

    JSHINT(code)

    console.log JSHINT.data()
