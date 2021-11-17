import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue' //importo la ruta del componente


Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes:[
        {path: '/formulario', component: Formulario},
        
    ]
})