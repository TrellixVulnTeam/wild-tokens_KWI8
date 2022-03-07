const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
        test:/\.s[ac]ss$/i,
        use: [
          // Inserts all imported styles into the html document
          { loader: "style-loader" },
  
          // Translates CSS into CommonJS
          { loader: "css-loader" },
  
          // Compiles Sass to CSS
          { loader: "sass-loader"},
  
          // Reads Sass vars from files or inlined in the options property
          { loader: "@epegzz/sass-vars-loader", options: {
            syntax: 'scss',
            files: [
              path.resolve(__dirname, 'src/tokens-transformed.json')
            ]
          }
          }]
      }]
    },
    resolve: {
        extensions: ['*', '.js']
    },
};