import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Hello from '@/components/Hello';
import Login from '@/components/Login';
import NotFound404 from '@/components/NotFound404';

Vue.use(Router);

const routes = [
  { path: '/', component: Hello },
  { path: '/login', name: 'login', component: Login },
  { path: '/dashboard', name: 'dashboard', component: Hello, meta: { requiresAuth: true } },
  { path: '*', component: NotFound404 },
];

const router = new Router({
  routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('dashboard');
  else next();
});

export default router;
