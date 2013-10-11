Interactive Runtime
===================

Register our example runners.

Tokens
------

    Interactive.register "tokens", ({source, runtimeElement}) ->
      tokens = CoffeeScript.tokens(source, bare: true).map (token) ->
        token[0]

      outputElement = document.createElement "pre"
      runtimeElement.empty().append outputElement

      outputElement.textContent = JSON.stringify(tokens, null, 2)

Nodes
-----

    Interactive.register "nodes", ({source, runtimeElement}) ->
      nodes = CoffeeScript.nodes(source, bare: true)

      outputElement = document.createElement "pre"
      runtimeElement.empty().append outputElement

      outputElement.textContent = JSON.stringify(nodes, null, 2)
