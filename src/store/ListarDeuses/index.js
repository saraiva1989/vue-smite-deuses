export default {
    namespaced: true,
    state: {
        GET_LOADING: false,
        GET_MODAL: false,
        GET_LISTADEUSES: [],
        GET_LISTADEUSESFILTRO: []
    },
    mutations: {
        SET_LOADING(state, payload) {
            state.GET_LOADING = payload
        },
        SET_MODAL(state, payload) {
            state.GET_MODAL = payload
        },
        SET_LISTADEUSES(state, payload) {
            state.GET_LISTADEUSES = payload
        },
        SET_LISTADEUSESFILTRO(state, payload) {
            state.GET_LISTADEUSESFILTRO = payload
        }
    },
    actions: {
        async buscarDeuses(context, payload) {
            context.commit('SET_LOADING', true)
            const request = await fetch(
                "https://smite.azurewebsites.net//api/Deuses/Listar"
            );
            const response = await request.json();
            context.commit('SET_LISTADEUSES', response)
            context.commit('SET_LISTADEUSESFILTRO', response)
            context.commit('SET_LOADING', false)
        }
    },
    // getters: {
    //     fullName: function (state) {
    //         return `${state.firstName} ${state.lastName}`
    //     }
    // }
}
