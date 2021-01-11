import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(), // hash模式
    // history: createWebHashHistory(), // history模式
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
