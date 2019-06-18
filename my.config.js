var { script, args } = require('html-dist');
 
module.exports = {
  outputFile: 'dist/index.html',
  minify: true,
  body: {
    remove: 'script'
  }
}