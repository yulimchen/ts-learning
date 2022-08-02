const path = require('path')

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
  }
}