import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../views/Login/UserLogin.vue'; // 正しいパスでインポート
import CalloutList from '../views/Callout/CalloutList.vue';
import CalloutEdit from '../views/Callout/CalloutEdit.vue';

const routes = [
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin, 
  },
  {
    path: '/callout/list',
    name: 'CalloutList',
    component: CalloutList,
  },
  {
    path: '/callout/create',
    name: 'CalloutCreate',
    component: CalloutEdit,
  },
  {
    path: '/callout/edit/:calloutId',
    name: 'CalloutEdit',
    component: CalloutEdit,
  },
  // 他のルート定義
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
