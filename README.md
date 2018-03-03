# Vue 项目

## CMS - 内容管理系统

## 技术

```html
vue + axios + vue-router + vuex（状态管理）
UI库和组件库： MintUI + MUI
webpack + ES6
```

## 项目依赖

```html
---- 开发依赖 ----
npm i -D webpack@3.10.0 webpack-dev-server@2.11.1 html-webpack-plugin style-loader css-loader sass-loader node-sass url-loader file-loader babel-core babel-loader babel-preset-env vue-loader vue-template-compiler

组件按需加载插件
npm i -D babel-plugin-component

---- 项目依赖 ----
npm i -S vue vue-router axios mint-ui
npm i -S moment vue-preview vuex
```

## 项目结构

```html
src\                项目源文件
  assets\           静态资源（样式、图片）
  components\       组件
  filters           过滤器
  lib\              用到的第三方包（例如：mui）
  router\           路由
  App.vue           项目根组件
  index.html        项目首页（SPA，唯一的页面）
  main.js           入口js文件（业务逻辑代码）
.babelrc            babel的配置文件
package-lock.json   npm 5.x以上下载包的lock文件，保证下载包的版本
package.json        项目描述文件
README.md           项目介绍以及功能实现步骤
webpack.config.js   webpack的配置文件
```

## 项目功能

- 1 App组件（项目入口）搭建
  - header（mint-ui header组件）
  - footer（注意MUI样式覆盖的问题 - tabbar）
  - content（路由的使用，别忘了use注册路由）
- 2 首页
  - 轮播图（mint-ui Swipe）
  - 九宫格（mui grid-default 60px）
- 3 新闻咨询
  - 新闻列表（mui 中的 media-list）
  - 新闻详情
  - 评论
- 4 图片分享
  - 图片列表（mui tab-top-webview-main） http://dev.dcloud.net.cn/mui/ui/#scroll
  - 图片详情（mint-ui lazy-load）
  - 图片详情预览（npm i -S vue-preview）
- 5 商品购买
  - 商品列表
  - 商品详情（mui card、numbox）
- 6 购物车
  - 每个商品（card）
  - 开关（mint-ui switch）
  - 购物车商品总数 和 总价
  - 商品删除

## 代码片段

```js
/* webpack.config.js */

// 有利于开发期间定位错误信息
devtool: 'eval-source-map',
```

```css
/* 文字内容超过长度以后省略号显示 */
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

```css
/*
  photo/List.vue 组件中使用mui scroll插件后，在Chrome浏览器中有警告提示
  参考这篇文章，查看原因：
  scroll滚动警告的处理方式参考：http://www.jianshu.com/p/baf61adc8667

  解决方案：
*/

.mui-scroll {
  touch-action: none;
}
```

```js
// vue-router 编程式导航：
// https://router.vuejs.org/zh-cn/essentials/navigation.html
showInfo(id) {
  this.$router.push(`/home/photoinfo/${id}`)

  // name 是路由规则中的配置的name属性
  this.$router.push({ name: 'user', params: { userId: 123 }})
}
```

```js
/*
  非Vue插件的使用方式

  以 axios 为例：添加到 Vue 的原型对象中，在组件中就可以通过 this.$http 调用axios了
*/

import axios from 'axios'
Vue.prototype.$http = axios
```

## 如何开始一个新的功能

- 1 现在对应的目录中创建单文件组件（App.vue）
- 2 现在组件中写一些基本结构
- 3 先加载这个组件，看看能不能展示这个组件
- 4 如果能够展示这个组件，才开始写组件中内容

## 如何使用 mui

- mui 是一个 UI库（类似于：Bootstrap）
- 1 引入 mui.css 样式文件
- 2 直接将 mui 中提供功能的HTML结构复制到组件中，就可以使用了

## App组件底部导航

- 购物车图标需要引入 mui 的 icons-extra 样式，还需将 mui-icons-extra.ttf 字体文件引入
- 注意：1 先引入 mui.min.css，2 再引入 icons-extra.css

## 修改 vue-router 默认激活类名

```js
const router = new VueRouter({
  routes: [],

  // 修改 路由默认的激活类名
  linkActiveClass: 'mui-active'
})
```

## ES6中字符串模板的使用

```js
// 使用字符串模板
const url = `http://vue.studyit.io/api/getnew/${this.$route.params.id}`

// 使用字符串拼接
const url = 'http://vue.studyit.io/api/getnew/' + this.$route.params.id
```