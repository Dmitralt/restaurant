const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.js',
  target: 'node',
  output: {
    library: 'modulename',
        libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}