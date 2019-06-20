const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname,'..','src');
const pageAll = glob.sync(`${rootPath}/pages/**/main.js`);
const isProduction = process.env.NODE_ENV == "production";
const config = require('../config');
console.log('isProduction', isProduction);
const bootstrapLoader = isProduction ? "bootstrap-loader/extractStyles":"bootstrap-loader";

const entries = {};
const chunks = [];
const htmlWebpackPlugins = [];

/* 编译原来的页面 */
function addOldPage() {
    htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            hash: false,
            inject: true,
            chunks: ['manifest','vendor','index'], // 添加进去的js chunk
            xhtml: true,
            minify: false,
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        })
    );
    entries['index'] = ["babel-polyfill", bootstrapLoader, "./src/main.js"];
}

// 添加webpack打包的页面
function addPage(pageName){
    entries[pageName] = [`./src/pages/${pageName}/main.js`];
    chunks.push(pageName);
    htmlWebpackPlugins.push(new HtmlWebpackPlugin({
        "template": `./src/pages/${pageName}/template.html`, // 模板名
        "filename": `${pageName}.html`, // 生成的文件名，除了首页外，其他页面都放到zh文件夹下面，区分简繁体
        "hash": false, // 是否加上 hash
        "inject": true, // 是否插入js、css
        "chunks": [pageName], // 添加进去的js chunk
        "xhtml": true, // 是否用<tag />表示自闭合
        "chunksSortMode": "dependency", // 页面引用js的顺序按照chunks数组排序
        // https://github.com/kangax/html-minifier#options-quick-reference
        "minify": false
    }));
}

// 需要的打包的页面
if( isProduction ){
    // build 时，打包所有的页面
    addPage('test');
}else{
    // dev 时，你可以只编译你修改的页面，提升打包速度
    addPage('test');
}


module.exports = {
    entries,
    chunks,
    htmlWebpackPlugins,
};
