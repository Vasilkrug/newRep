import {createWebHistory, createRouter} from 'vue-router';
import PersonalAcc from "@/pages/PersonalAcc/PersonalAcc";
import ServersInfo from "@/pages/ServersInfo/ServersInfo";
import PersonalSettings from "@/pages/PersonalSettings/PersonalSettings";
import ItemServer from "@/pages/ItemServer/ItemServer";

export const routes = [
    {path: '/account', name: 'Личный кабинет', component: PersonalAcc, meta: {title: 'Личный кабинет'}, img: 'account.png'},
    {path: '/servers', name: 'Cерверы', component: ServersInfo, meta: {title: 'Cерверы'}, img: 'server.svg'},
    {path: '/settings', name: 'Настройки', component: PersonalSettings, meta: {title: 'Настройки'}, img: 'settings.svg'},
    {path: '/:itemId', name: 'id', component: ItemServer}
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