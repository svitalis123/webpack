const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : 'production',
  entry : './src/index.js',
  output : {
    filename: '[name].bundle.js',
    path : path.resolve(__dirname, 'dist'),
    clean : true,
    publicPath : '/',
  },
  plugins : [
    new HtmlWebpackPlugin({
      // title: 'Output Management', it appears in the as title of the browser set on head
      template: './src/index.html'
    }),
  ],
  devServer : {
    static: './dist'
  },
  optimization : {
    runtimeChunk : 'single', 
  }
}