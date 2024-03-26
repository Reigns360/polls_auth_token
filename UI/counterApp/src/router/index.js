import {createRouter, createWebHistory} from 'vue-router';
import homeview from "../views/homeview.vue"
import results from "../views/results.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: "home",
            component: homeview
        },
        {
            path:'/results',
            name: "results",    
            component:results
        }
    ]
});

export default router