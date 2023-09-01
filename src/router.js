import { createRouter, createWebHashHistory } from 'vue-router';


const youtube = { template: '<div>Youtube</div>' };
const youtubedtl = { template: '<div>Youtubedtl</div>' };
const login = { template: '<div>Login</div>' };
const plans = { template: '<div>Plans</div>' };
const login2 = { template: '<div>Login2</div>' };
const Statistic = { template: '<div>Statistic</div>' };
const OnlineBank = { template: '<div>OnlineBank</div>' };
const OnlineBank2 = { template: '<div>OnlineBank2</div>' };
const OnlineBank3 = { template: '<div>OnlineBank3</div>' };




const routes = [
  { path: '/', component: youtube },
  { path: '/youtubedtl/:index', component: youtubedtl, name:'youtubedtl'},
  { path: '/login', component: login, name:'login'},
  { path: '/plans', component: plans, name:'plans'},
  { path: '/login2', component: login2, name:'login2' },
  { path: '/statistic', component: Statistic, name:'statistic' },
  { path: '/online-banking', component: OnlineBank, name:'online-banking' },
  { path: '/online-banking2', component: OnlineBank2, name:'online-banking2' },
  { path: '/online-banking3', component: OnlineBank3, name:'online-banking3' },
];


const router = createRouter({
  history:createWebHashHistory(),
  routes,   
})

const app = Vue.createApp({})

app.use(router)

app.mount('#app')

