const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require('path')

// webpack 配置
module.exports = {
  // 入口文件
  entry: "./src/index.ts",

  // 输出
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  // 模块
  module: {
    // 指定加载规则
    rules: [
      {
        // 指定规则生效文件
        test: /\.ts$/,
        use: "ts-loader",
        exclude: path.resolve(__dirname, "node_modules")
      }
    ]
  },

  // 插件
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    // 打包前清除旧文件
    new CleanWebpackPlugin()
  ],

  // 用来配置允许引用模块
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  }
}