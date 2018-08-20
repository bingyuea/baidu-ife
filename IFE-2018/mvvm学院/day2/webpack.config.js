const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' //生成文件参照的模版也可以是其他文件
    })
  ],
  module: {
    rules: [
      {
        test: /.san$/,
        use: 'san-loader'
      }
    ]
  }
};

