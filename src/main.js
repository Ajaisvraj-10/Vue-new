import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Youtube from './pages/Youtube.vue';
import Youtubedtl from './pages/Youtubedtl.vue';
import Login from './pages/Login.vue'
import Plans from './pages/Plans.vue'
import Login2 from './pages/Login2.vue'
import Statistic from './pages/Statistic.vue'
import OnlineBank from './pages/OnlineBank.vue'
import OnlineBank2 from './pages/OnlineBank2.vue'
import OnlineBank3 from './pages/OnlineBank3.vue'
import './pages/styles/global.css'; 

const routes = [
  { path: '/', component: Youtube },
  { path: '/youtubedtl/:index', component: Youtubedtl, name:'youtubedtl' },
  { path: '/login', component: Login, name:'login' },
  { path: '/plans', component: Plans, name:'plans' },
  { path: '/login2', component: Login2, name:'login2' },
  { path: '/statistic', component: Statistic, name:'statistic' },
  { path: '/online-banking', component: OnlineBank, name:'online-banking' },
  { path: '/online-banking2', component: OnlineBank2, name:'online-banking2' },
  { path: '/online-banking3', component: OnlineBank3, name:'online-banking3' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,   
});

const app = createApp(App);

app.use(router);

app.mount('#app');
