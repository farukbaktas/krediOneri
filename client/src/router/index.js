import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Homepage',
        path: '/',
        component: () => import('../views/Homepage.vue')
    },
    {
        name: 'HousingLoan',
        path: '/konut-kredisi',
        component: () => import('../views/HousingLoan.vue')
    },
    {
        name: 'Deneme',
        path: '/deneme',
        component: () => import('../views/Deneme.vue')
    },
    {
        name: 'LoanDetail',
        path: '/konut-kredisi/:id',
        component: () => import('../views/LoanDetail.vue'),
        props: true
    },
    {
        name: 'Konut',
        path: '/kredi/konut',
        component: () => import('../views/Kredi/Konut.vue')
    },
    {
        name: 'Ihtiyac',
        path: '/kredi/ihtiyac',
        component: () => import('../views/Kredi/Ihtiyac.vue')
    },
    {
        name: 'Kobi',
        path: '/kredi/kobi',
        component: () => import('../views/Kredi/Kobi.vue')
    },
    {
        name: 'Tasit',
        path: '/kredi/tasit',
        component: () => import('../views/Kredi/Tasit.vue')
    },
    {
        name: 'StuffArea',
        path: '/edit',
        component: () => import('../views/StuffArea.vue')
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