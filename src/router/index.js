import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login | Vin',
      hasLayout: false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Vin',
      hasLayout: false
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Dashboard | Vin',
      hasLayout: true
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
