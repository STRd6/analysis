(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.0",
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "analysis\n========\n\nStatic Analysis for CoffeeScript\n",
      "type": "blob"
    },
    "analysis.coffee.md": {
      "path": "analysis.coffee.md",
      "mode": "100644",
      "content": "Analysis\n========\n\nTokens\n------\n\n>     #! tokens\n>     -> \"hey\"\n\nNodes\n-----\n\n>     #! nodes\n>     -> \"yolo\"\n\nLive Examples\n-------------\n\n>     #! setup\n>     require \"./interactive_runtime\"\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "entryPoint: \"analysis\"\nversion: \"0.1.0\"\nremoteDependencies: [\n  \"//cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js\"\n  \"http://www.jshint.com/res/jshint.js\"\n  \"http://strd6.github.io/require/v0.2.1.js\"\n]\n",
      "type": "blob"
    },
    "samples/global.coffee": {
      "path": "samples/global.coffee",
      "mode": "100644",
      "content": "$('h2').hide()\n",
      "type": "blob"
    },
    "samples/local.coffee": {
      "path": "samples/local.coffee",
      "mode": "100644",
      "content": "$ = \"wat\"\n",
      "type": "blob"
    },
    "test/global.coffee": {
      "path": "test/global.coffee",
      "mode": "100644",
      "content": "{loadFile} = require \"../util\"\n\nnodes = (source) ->\n  CoffeeScript.nodes source\n\ntokens = (source) ->\n  CoffeeScript.tokens source\n  \ncompile = (source) ->\n  CoffeeScript.compile source\n\ndescribe \"global detection\", ->\n  it \"should detect globals\", ->\n    result = compile loadFile \"samples/local.coffee\"\n\n    console.log result\n\ndescribe \"JSHint\", ->\n  it \"should lint stuff\", ->\n    code = compile loadFile \"samples/global.coffee\"\n\n    JSHINT(code)\n\n    console.log JSHINT.data()\n",
      "type": "blob"
    },
    "util.coffee.md": {
      "path": "util.coffee.md",
      "mode": "100644",
      "content": "Util\n----\n\n    module.exports =\n      loadFile: (name) ->\n        PACKAGE.source[name]?.content\n",
      "type": "blob"
    },
    "interactive_runtime.coffee.md": {
      "path": "interactive_runtime.coffee.md",
      "mode": "100644",
      "content": "Interactive Runtime\n===================\n\nRegister our example runners.\n\nTokens\n------\n\n    Interactive.register \"tokens\", ({source, runtimeElement}) ->\n      tokens = CoffeeScript.tokens(source, bare: true).map (token) ->\n        token[0]\n\n      outputElement = document.createElement \"pre\"\n      runtimeElement.empty().append outputElement\n\n      outputElement.textContent = JSON.stringify(tokens, null, 2)\n\nNodes\n-----\n\n    Interactive.register \"nodes\", ({source, runtimeElement}) ->\n      nodes = CoffeeScript.nodes(source, bare: true)\n\n      outputElement = document.createElement \"pre\"\n      runtimeElement.empty().append outputElement\n\n      outputElement.textContent = JSON.stringify(nodes, null, 2)\n",
      "type": "blob"
    }
  },
  "distribution": {
    "analysis": {
      "path": "analysis",
      "content": "(function() {\n\n\n}).call(this);\n\n//# sourceURL=analysis.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"entryPoint\":\"analysis\",\"version\":\"0.1.0\",\"remoteDependencies\":[\"//cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js\",\"http://www.jshint.com/res/jshint.js\",\"http://strd6.github.io/require/v0.2.1.js\"]};",
      "type": "blob"
    },
    "samples/global": {
      "path": "samples/global",
      "content": "(function() {\n  $('h2').hide();\n\n}).call(this);\n\n//# sourceURL=samples/global.coffee",
      "type": "blob"
    },
    "samples/local": {
      "path": "samples/local",
      "content": "(function() {\n  var $;\n\n  $ = \"wat\";\n\n}).call(this);\n\n//# sourceURL=samples/local.coffee",
      "type": "blob"
    },
    "test/global": {
      "path": "test/global",
      "content": "(function() {\n  var compile, loadFile, nodes, tokens;\n\n  loadFile = require(\"../util\").loadFile;\n\n  nodes = function(source) {\n    return CoffeeScript.nodes(source);\n  };\n\n  tokens = function(source) {\n    return CoffeeScript.tokens(source);\n  };\n\n  compile = function(source) {\n    return CoffeeScript.compile(source);\n  };\n\n  describe(\"global detection\", function() {\n    return it(\"should detect globals\", function() {\n      var result;\n      result = compile(loadFile(\"samples/local.coffee\"));\n      return console.log(result);\n    });\n  });\n\n  describe(\"JSHint\", function() {\n    return it(\"should lint stuff\", function() {\n      var code;\n      code = compile(loadFile(\"samples/global.coffee\"));\n      JSHINT(code);\n      return console.log(JSHINT.data());\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/global.coffee",
      "type": "blob"
    },
    "util": {
      "path": "util",
      "content": "(function() {\n  module.exports = {\n    loadFile: function(name) {\n      var _ref;\n      return (_ref = PACKAGE.source[name]) != null ? _ref.content : void 0;\n    }\n  };\n\n}).call(this);\n\n//# sourceURL=util.coffee",
      "type": "blob"
    },
    "interactive_runtime": {
      "path": "interactive_runtime",
      "content": "(function() {\n  Interactive.register(\"tokens\", function(_arg) {\n    var outputElement, runtimeElement, source, tokens;\n    source = _arg.source, runtimeElement = _arg.runtimeElement;\n    tokens = CoffeeScript.tokens(source, {\n      bare: true\n    }).map(function(token) {\n      return token[0];\n    });\n    outputElement = document.createElement(\"pre\");\n    runtimeElement.empty().append(outputElement);\n    return outputElement.textContent = JSON.stringify(tokens, null, 2);\n  });\n\n  Interactive.register(\"nodes\", function(_arg) {\n    var nodes, outputElement, runtimeElement, source;\n    source = _arg.source, runtimeElement = _arg.runtimeElement;\n    nodes = CoffeeScript.nodes(source, {\n      bare: true\n    });\n    outputElement = document.createElement(\"pre\");\n    runtimeElement.empty().append(outputElement);\n    return outputElement.textContent = JSON.stringify(nodes, null, 2);\n  });\n\n}).call(this);\n\n//# sourceURL=interactive_runtime.coffee",
      "type": "blob"
    }
  },
  "entryPoint": "analysis",
  "dependencies": {},
  "remoteDependencies": [
    "//cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js",
    "http://www.jshint.com/res/jshint.js",
    "http://strd6.github.io/require/v0.2.1.js"
  ],
  "repository": {
    "id": 13282199,
    "name": "analysis",
    "full_name": "STRd6/analysis",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://2.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/analysis",
    "description": "Static Analysis for CoffeeScript",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/analysis",
    "forks_url": "https://api.github.com/repos/STRd6/analysis/forks",
    "keys_url": "https://api.github.com/repos/STRd6/analysis/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/analysis/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/analysis/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/analysis/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/analysis/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/analysis/events",
    "assignees_url": "https://api.github.com/repos/STRd6/analysis/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/analysis/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/analysis/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/analysis/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/analysis/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/analysis/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/analysis/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/analysis/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/analysis/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/analysis/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/analysis/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/analysis/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/analysis/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/analysis/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/analysis/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/analysis/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/analysis/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/analysis/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/analysis/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/analysis/merges",
    "archive_url": "https://api.github.com/repos/STRd6/analysis/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/analysis/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/analysis/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/analysis/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/analysis/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/analysis/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/analysis/labels{/name}",
    "created_at": "2013-10-02T20:38:26Z",
    "updated_at": "2013-10-02T23:02:25Z",
    "pushed_at": "2013-10-02T23:02:24Z",
    "git_url": "git://github.com/STRd6/analysis.git",
    "ssh_url": "git@github.com:STRd6/analysis.git",
    "clone_url": "https://github.com/STRd6/analysis.git",
    "svn_url": "https://github.com/STRd6/analysis",
    "homepage": null,
    "size": 256,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "master_branch": "master",
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "branch": "master",
    "defaultBranch": "master",
    "includedModules": [
      "Bindable"
    ]
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  }
});