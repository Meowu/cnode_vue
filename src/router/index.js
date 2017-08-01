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

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'All',
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
      path: '/content',
      name: 'content',
      component: ArticleContent,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
