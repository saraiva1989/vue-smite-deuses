<script setup>
import Loading from "../components/generico/Loading.vue";
import Modal from "../components/ListaDeuses/ModalFiltroLista.vue";
import CardDeuses from "../components/ListaDeuses/CardDeuses.vue";
import Topo from "../components/generico/Topo.vue"
</script>

<template>
  <div>
    <Loading />
    <Modal />
    <Topo classe="logo" :mostrarPesquisa="true" />
    <div id="conteudo" @click="ocultarModal()">
      <div v-for="(item, index) in listaDeuses" :key="index">
        <CardDeuses :cardDeus="item" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // listaDeuses: [],
    };
  },

  computed: {
    listaDeuses() {
      return this.$store.state.ListarDeuses.GET_LISTADEUSESFILTRO
    }
  },

  async created() {
    await this.$store.dispatch("ListarDeuses/buscarDeuses", []);
    console.log(
      "🚀 ~ file: ListaDeuses.vue ~ line 37 ~ created ~ listaJogos",
      this.listaDeuses
    );

    // setTimeout(() => {
    //   this.listaDeuses = this.listaDeuses.filter(x => x.classe == "Mago")
    //   console.log(this.listaDeuses)
    // }, 5000);
  },

  methods:{
    ocultarModal() {
      this.$store.commit('ListarDeuses/SET_MODAL', false )
    }
  }
};
</script>
