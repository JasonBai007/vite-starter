import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import("@/views/signin.vue"),
        },
        {
            path: '/charts',
            component: () => import("@/views/charts.vue"),
        }
    ]
})

export default router;
