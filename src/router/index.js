import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import ArticleList from '@/components/ArticleList'
import About from '@/components/About'
import ArticleContent from '@/components/ArticleContent'
import Message from '@/components/Message'
import Profile from '@/components/Profile'
import Publish from '@/components/Publish'
import Login from '@/components/Login'

Vue.use(Router)

// 一个坑，当F5或者reload或者router.go(0)刷新当前页面时，无法渲染正确的组件
// 首页刷新不是根据url渲染，而是根据初始值？

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } 
  const position = {}
  if (to.mathched.some(m => m.meta.scrollToTop)) {
    position.x = 0
    position.y = 0
  }
  return position
}

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ArticleList,
    },
    {
      path: '/topics',
      name: 'topic',
      component: ArticleList,
    },
    {
      path: '/topics/:tab',
      name: 'tab',
      component: ArticleList,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/topics/content/:id',
      name: 'content',
      component: ArticleContent,
      meta: { scrollToTop: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish,
    },
  ],
});
