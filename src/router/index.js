import {createWebHistory, createRouter} from 'vue-router';
import PersonalAcc from "@/pages/PersonalAcc/PersonalAcc";
import ServersInfo from "@/pages/ServersInfo/ServersInfo";
import PersonalSettings from "@/pages/PersonalSettings/PersonalSettings";

export const routes = [
    {path: '/account', name: 'Личный кабинет', component: PersonalAcc, meta: {title: 'Личный кабинет'}, img: 'home.png'},
    {path: '/servers', name: 'Cерверы', component: ServersInfo, meta: {title: 'Cерверы'}, img: 'setting.png'},
    {path: '/settings', name: 'Настройки', component: PersonalSettings, meta: {title: 'Настройки'}, img: 'telegram.png'},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title
    next()
})
export default router;