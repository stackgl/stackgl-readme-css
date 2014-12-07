var pygmentize = require('pygmentize-bundled')
var cheerio    = require('cheerio')
var marked     = require('marked')
var fs         = require('fs')

var markedOpts = {
  highlight: function(code, lang, done) {
    if (!lang) return done(null, code)
    pygmentize({ lang: lang, format: 'html' }, code, function(err, result) {
      result = String(result)
      result = cheerio.load(result)('.highlight > pre').html()
      result = result.trim()
      done(err, result)
    })
  }
}

marked(fs.readFileSync('example.md', 'utf8')
  , markedOpts
  , function(err, readme) {
    if (err) throw err

    fs.writeFileSync('index.html', [
        '<!DOCTYPE html>'
      , '<html>'
      , '<head>'
      , '  <title>stackgl-readme-css</title>'
      , '  <link rel="stylesheet" href="index.css"/>'
      , '  <link rel="stylesheet" href="fonts/style.css"/>'
      , '  <link href="http://fonts.googleapis.com/css?family=Roboto:400,100,300" rel="stylesheet" type="text/css">'
      , '  <style>'
      , '    .stackgl-readme {'
      , '       margin: 0 auto;'
      , '       max-width: 650px;'
      , '       padding: 2rem;'
      , '    }'
      , '  </style>'
      , '</head>'
      , '<body><div class="stackgl-readme">'
      , readme
      , '</div></body>'
      , '</html>'
    ].join('\n'))
  })
