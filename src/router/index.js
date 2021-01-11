import { createRouter, createWebHistory } from "vue-router";
import index from '../views/index.vue'
import one from '../views/one.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/one',
            component: one
        }
    ],
