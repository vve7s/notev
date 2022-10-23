import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import store from "../store";


const authRequiredRoutes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import('../views/Note.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/errors/NotFound.vue')
  }
];

const authNotRequiredRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue')
  }
]

const routes = authRequiredRoutes.concat(authNotRequiredRoutes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
})

router.beforeEach((to, from, next) => {

  const arrAuthNotRequiredRoutes = ["Login", "Register"];
  const arrAuthRequiredRoutes = [];
  authRequiredRoutes.forEach((val) => {
      arrAuthRequiredRoutes.push(val.name);
  });

  const _isAuthenticated = store.getters._isAuthenticated;

  if (arrAuthNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next({ name : "404"});

  if (arrAuthRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name : "Login" });
  } else {
    next();
  }

});

export default router
