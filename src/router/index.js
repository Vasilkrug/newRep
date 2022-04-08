import {createWebHistory, createRouter} from 'vue-router'
import PersonalAcc from "@/pages/PersonalAcc/PersonalAcc";
import Servers from "@/pages/Servers/Servers";
import Settings from "@/pages/Settings/Settings";


const routes = [
    {path:'/account', name:'account', component: PersonalAcc},
    {path:'/servers', name:'servers', component: Servers},
    {path:'/settings', name:'settings', component: Settings},
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router