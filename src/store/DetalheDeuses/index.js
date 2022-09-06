export default {
    namespaced: true,
    state: {
        GET_LOADING: false,
        GET_MODAL: false,
        GET_YOUTUBE: '',
        GET_ALTURA: 500,
        GET_LARGURA: 700,
        GET_DEUS: {},
    },
    mutations: {
        SET_LOADING(state, payload) {
            state.GET_LOADING = payload
        },
        SET_YOUTUBE(state, payload) {
            state.GET_YOUTUBE = payload
        },
        SET_ALTURA(state, payload) {
            state.GET_ALTURA = payload
        },
        SET_LARGURA(state, payload) {
            state.GET_LARGURA = payload
        },
        SET_MODAL(state, payload) {
            state.GET_MODAL = payload
        },
        SET_DEUS(state, payload) {
            state.GET_DEUS = payload
        }
    },
    actions: {
        async buscarDeus(context, payload) {
            
            this.commit('ListarDeuses/SET_LOADING', true )
            const request = await fetch(
                `https://smite.azurewebsites.net//api/Deuses/Detalhes?slug=${payload.slug}`
            );
            const response = await request.json();
            context.commit('SET_DEUS', response)
            this.commit('ListarDeuses/SET_LOADING', false )
        }
    },
    // getters: {
    //     fullName: function (state) {
    //         return `${state.firstName} ${state.lastName}`
    //     }
    // }
}
