import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        component: () => import('../views/index1.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/sign-up',
        component: () => import('../views/sign-up.vue')
    },
    // {
    //     path: '/password-forget',
    //     component: () => import('../views/password-forget.vue')
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router