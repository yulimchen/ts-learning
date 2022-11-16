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
    filename: "bundle.js",
    environment: {
      // 不要使用箭头函数
      arrowFunction: false,
      // 不要使用 const
      const: false
    }
  },

  // 模块
  module: {
    // 指定加载规则
    rules: [
      {
        // 指定规则生效文件
        test: /\.ts$/,
        use: [
          // 配置 babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 配置 babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "ie": "11"
                    },
                    // 指定 corejs 版本
                    "corejs": "3",
                    // 使用 corejs 的方式 "usage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ],
        exclude: path.resolve(__dirname, "node_modules")
      },

      // 设置 less 文件的处理
      {
        test: /\.less$/,
        use: [
          // 注：数组配置 webpack 从下往上读取
          "style-loader",
          "css-loader",
          // postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
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