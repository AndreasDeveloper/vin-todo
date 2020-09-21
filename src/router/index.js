import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';
import Calendar from '../views/Calendar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hasLayout: false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      hasLayout: false
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      hasLayout: true
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: {
      hasLayout: true
    }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
