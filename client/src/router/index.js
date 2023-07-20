import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Homepage',
        path: '/',
        component: () => import('../views/Homepage.vue')
    },
    {
        name: 'SignIn',
        path: '/signin',
        component: () => import('../views/SignIn.vue')
    },
    {
        name: 'Signup',
        path: '/signup',
        component: () => import('../views/SignUp.vue')
    },
    {
        name: 'ResetPassword',
        path: '/reset-password',
        component: () => import('../views/ResetPassword.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;