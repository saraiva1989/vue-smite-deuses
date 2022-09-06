import { createStore } from 'vuex'
import ListarDeuses from './ListarDeuses'
import DetalheDeuses from './DetalheDeuses'


export default new createStore({
    modules: {
        ListarDeuses,
        DetalheDeuses
    }
})