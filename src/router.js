import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Islands from './views/Islands.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Example',
        icon: 'example'
      }
    },
    {
      path: '/islands',
      name: 'islands',
      component: Islands
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: 'about' */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>
        import(/* webpackChunkName: 'contact' */ './views/Contact.vue')
    }
  ]
});
