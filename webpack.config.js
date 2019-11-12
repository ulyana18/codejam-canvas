var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist'),
    },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
         test: /\.(png|svg|jpg|gif)$/,
          use: [
          'file-loader',
          ],
          },
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }

        ],
    },
};