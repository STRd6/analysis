Util
----

    module.exports =
      loadFile: (name) ->
        PACKAGE.source[name]?.content
