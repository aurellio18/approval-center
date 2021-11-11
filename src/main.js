import { createApp } from 'vue'
import App from './App.vue'
import Approval from './components/Approval.vue'
import Outstanding from './components/outstanding.vue'
import ItRequest from './components/ItRequest.vue'
import { createRouter, createWebHistory } from 'vue-router';


const routes =[
    {
        path: '/approval',
        component: Approval,
    },
    {
        path: '/out',
        component: Outstanding,
    },
    {
        path: '/itRequest',
        component: ItRequest,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});

const app = createApp(App);
app.use(router);
app.mount('#app');