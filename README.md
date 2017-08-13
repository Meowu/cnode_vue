# cnode

> cnode.js client written in Vue.js

### Vue2.0 + Vuex + Vue-Router + axios + ES6
-[x] 登入登出功能
-[x] 查看不同版块内容功能
-[x] 查看主题文章详细内容功能
-[x] 返回主题页滚动到历史位置功能
-[x] 一键返回顶部
-[x] 回复功能
-[x] 查看用户详情功能
-[x] 发帖功能
-[x] 收藏帖子功能 

这是使用Vue全家桶搭建的一个更加完整的项目，与后端数据库进行了对接，感谢cnode社区开放的API。
在这个过程中也踩到了更多的坑，有问题引发出思考，在解决这些坑的过程中对Vue的各种用法有了更进一步的了解。特别是Vue-Router，为了弄清楚一些问题，我clone了它的源码下来研究，虽然不能完全看懂源码的实现，但是也大概知道了某些地方是怎样去实现了。知道Vue-Router的histroy模式是模拟了原生history API去实现的，然后继续去了解了这方面的知识，知道了前端路由的实现原理，有history和hash两种方法。为了验证和巩固这些知识，自己也使用ajax配合history以及node做了一个简单的实现。其大概的原理就是这样：
    1.  拦截a标签的默认跳转动作。
    2.  使用Ajax请求新页面。
    3.  将返回的Html替换到页面中。
    4.  使用HTML5的History API或者Url的Hash修改Url。


### 复用组件，无法更新数据的问题。
在这个项目中，cnode社区的版块大概分为6个tab，因为每个tab的展示模式都是一样的，只是内容不一样，因而我让它们使用同一个组件渲染数据。但是在一开始发现这样的话，在切换tab不会更新数据，因为每个tab匹配的路由都是`path: '/topics/:tab'`，而从一个tab切换到另一个tab的时候只是`:tab`发生改变，匹配的路由及对应的组件是没有发生变化的，因而不会触发更新。在文档中提到获取数据有两种模式方法，一种是在导航完成之前获取，一种是在导航完成之后获取。在这里我采用的是导航完成之后获取:
```javascript
    watch: {
    // 再次点击同一个tab，由于路由不变数据不会重新渲染
    '$route.params.tab' () {  // 监听路由变化，重新调用获取数据的方法。
      this.fetchData()
    }
  },
```
### 无法给V-html注入的内容编写样式
在Vue中， Mustache 会将数据解释为纯文本， 要输出真正的HTML，需要使用 v-html 指令，因为cnode返回的是html数据，所以需要使用该指令将数据注入到模版中。但是遇到的问题就是无法给这些内容设置样式。在 .vue 模块文件中，为了让样式保持独立不会应用到污染到其它组件，会给 style 标签添加 scoped 属性，它会使得样式只对当前组件内容生效。Vue规定对于每个组件都只能有一个根元素，在编译时Vue会给每个组件根元素生成一个特有的 data-v-xxx 属性并应用到模板的所有后辈元素上。但是v-html注入的内容在vue底层进行编译的时候是不知道的，它只会按照原样输出，因而其上面不会有data-v-xxx属性，所以我们在带有scoped属性的标签内编写的样式是不会应用到这些内容里面的，解决办法就是使用不带scoped的style标签即可。

### 切换页面再回到原来的滚动位置的问题。
这大概是一种非常常见的需求，对于这种问题大概常见的方法就是使用localStorage把滚动的位置储存下来，在返回当前页的时候再把位置信息取出来恢复到原来的位置。不过Vue-Router提供了一个`scrollBehavior`方法，让你能自定义路由切换时控制页面滚动行为，并且可以利用路由元信息更细粒度地控制滚动。
```javascript
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
}
```
### 滚动过快引起的页面抖动行为
这应该也是经常碰到的一种问题，当你上下拖动过快的时候，触发的onscroll事件过多就会引起页面抖动，对于这个问题有两种方法可以解决，一个就是防抖，只触发一次，在一定的时间内无论怎么被调用都不会再触发。另一个是节流，在给定的事件段内最多只触发一次。我去看了underscore源码关于这两个方法的实现，写得比较复杂，所以就用了《JavaScript高级程序设计》（第三版）中给出的简化版，改天有时间再去研究其原理然后自己尝试实现一遍。
```javascript
    throttle (fn) {
      clearTimeout(fn.id);
      fn.id = setTimeout(fn, 200)
    }
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
Vue版 cnode.js 社区
