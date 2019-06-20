const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        libs1: ['babel-polyfill','vuex','vue-router'],
    },
    output: {
        path: path.join(__dirname, '../static/js'), // 输出的路径
        filename: '[name].dll.js', // 输出的文件，将会根据entry命名为vendor.dll.js
        library: '[name]_library' // 暴露出的全局变量名
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '../static/js/', '[name]-manifest.json'), // 描述依赖对应关系的json文件
            name: '[name]_library',
            context: __dirname // 执行的上下文环境，对之后DllReferencePlugin有用
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
              warnings: false,
              output: {
                comments: false,
                beautify: false,
              },
            }
        })
    ]
}
