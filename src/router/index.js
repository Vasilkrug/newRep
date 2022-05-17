import {createWebHistory, createRouter} from 'vue-router';
import PersonalAcc from "@/pages/PersonalAcc/PersonalAcc";
import ServersInfo from "@/pages/ServersList/ServersList";
import PersonalSettings from "@/pages/PersonalSettings/PersonalSettings";
import ItemServer from "@/pages/ServerCard/ServerCard";

export const routes = [
    {path: '/account', name: 'Личный кабинет', component: PersonalAcc, meta: {title: 'Личный кабинет'}},
    {path: '/servers', name: 'Cерверы', component: ServersInfo, meta: {title: 'Cерверы'}},
    {path: '/settings', name: 'Настройки', component: PersonalSettings, meta: {title: 'Настройки'}},
    {path: '/servers/:itemId', name: 'id', component: ItemServer}
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