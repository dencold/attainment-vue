import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import NotFound404 from '@/components/NotFound404';

Vue.use(Router);

const routes = [
  { path: '/', name: 'Hello', component: Hello },
  { path: '*', name: '404View', component: NotFound404 },
];

export default new Router({
  routes,
  mode: 'history',
});
