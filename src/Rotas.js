import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import ListaDeuses  from "./paginas/ListaDeuses.vue"
import DetalheDeus from "./paginas/DeusesDetalhe.vue"

const routes = [
    {
        path: '/',
        name: 'ListaDeuses',
        component: ListaDeuses
    },
    {
        path: '/detalhe-deus',
        name: 'DetalheDeus',
        component: DetalheDeus

    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
