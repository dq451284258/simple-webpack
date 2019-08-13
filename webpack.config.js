const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpack = require('webpack')

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
    snkrsPass: './src/views/snkrsPass/script.js'
  },
  output: {
    filename: "static/js/[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "simple",
      template: "./public/index.html",
      excludeChunks: ['snkrsPass']
    }),
    new HtmlWebpackPlugin({
      title: "snkrsPass",
      filename: 'snkrsPass.html',
      template: "./src/views/snkrsPass/index.html",
      chunks: ['snkrsPass']
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css'
    }),
    new CleanWebpackPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8999,
    proxy: {
      '/api': {
        target: "",
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  }
}
