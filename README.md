# WEBUI 前端开发文档

> webui是基于`Vue.js`开发一款客户端的网站。   
兼容`IE10+`(包含ie10)，网站包含`中文简体`，`中文繁体`，`英文`三种语言。   
有夜间和白天两种皮肤。

## 编译环境要求
node >= 4.0.0   
npm >= 3.0.0

## 技术栈 or 插件
- vue
- vue-router
- vuex
- websocket
- vue-lazy-render
- jquery
- jquery-ui
- bootstrap
- md5
- swiper
- jqueryValidate
- echarts
- scss

## 项目目录结构

- 源码都写在 `src` 目录下；
- 理论上`dist`下面的文件都是`webpack`编译后输出的，请不要直接在`dist`下面修改或添加文件！！！

```
├─webui
|  ├─build                      webpack编译环境
|  ├─config                     webpack环境的配置目录
|  ├─dist                       编译后输出的目录
|  ├─node_modules               项目依赖的node模块包
|  ├─src                        源码
|  |  ├─assets                  静态资源
|  |  ├─components              组件目录
|  |  ├─directive               指令目录
|  |  ├─mobile                  移动端的文件(目前只有注册和下载页面)
|  |  ├─router                  路由
|  |  ├─views                   视图文件
|  |  ├─vuex                    状态管理集
|  |  ├─app.vue                 项目入口主文件
|  |  ├─main.js                 项目入口文件js
|  ├─static                     静态资源目录
|  |  ├─common                  webpack DLL压出来的公共js
|  |  ├─css                     页面css文件
|  |  ├─images                  图片文件
|  |  ├─js                      js文件
|  |  |  ├─libs                 js插件依赖包
|  |  |  ├─cmd.js               服务器协议命令码
|  |  |  ├─config.js            开发环境配置，sit/uat/prd
|  |  |  ├─jquery-vendor.js     生成$.ajax2处理跨域调用接口的问题
|  |  |  ├─lang_**.js           多语言文件包
|  |  |  ├─util.js              常用js工具包
|  |  ├─scss                    scss模块文件
|  ├─.babelrc                   babel配置
|  ├─.editorconfig              编码风格配置
|  ├─.eslitignore               ESLint忽略的配置  
|  ├─.postcssrc.js              postcss的配置
|  ├─data.json                  测试数据
|  ├─index.html                 页面html的模板
|  ├─package.json               项目依赖包
|  ├─README.md                  开发必读
```

## 图标

图标都是使用Bootstrap的图标库。

## 安装

看到这里，你已经对项目有一定的理解，请开始安装吧。   

安装命令
```
npm install
```

## 运行开发模式

```
npm run dev
```

## 运行编译模式

```
npm run build
```

## 开发注意事项

- 白天和夜间两种皮肤模式；
- 多语言的处理和内容排版，比如英文的单词换行或强制换行，两端对齐等等；
- 代码请写注释啊大兄弟；
- 引入新技术请和团队商量决定；
