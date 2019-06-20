var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack');
const HappyPack = require('happypack');
const pages = require('./pages');
const bootstrapLoader = process.env.NODE_ENV === 'production' ? "bootstrap-loader/extractStyles":"bootstrap-loader";
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: pages.entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'static': resolve('static'),
      'assets': resolve('src/assets'),
      'common': resolve('src/common'),
      'mobile': resolve('src/pages/mobile'),
      'trade': resolve('src/pages/trade'),
      'images': resolve('static/images'),
    }
  },
  module: {
    rules: [
      /*{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },*/
      {
        test: /\.vue$/,
        loader: 'happypack/loader',

      },
      {
        test: /\.js[x]?$/,
        loaders:['babel-loader'],
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: process.env.NODE_ENV === 'production' ? 10000 : 500,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: process.env.NODE_ENV === 'production' ? 10000 : 500,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
    ]
  },
  plugins:[
    new HappyPack({
      loaders: [{
        loader: 'vue-loader',
        options: vueLoaderConfig
      }]
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../static/js/libs1-manifest.json'),
    }),
    // webpack 依赖包体积分析
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'server',
    //   analyzerHost: '127.0.0.1',
    //   analyzerPort: 8889,
    //   reportFilename: 'report.html',
    //   defaultSizes: 'parsed',
    //   openAnalyzer: true,
    //   generateStatsFile: false,
    //   statsFilename: 'stats.json',
    //   statsOptions: null,
    //   logLevel: 'info'
    // }),
  ]
}
