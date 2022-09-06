<script setup>
defineProps({
  mostrarPesquisa: Boolean,
  classe: String
})

</script>

<template>
  <div id="topo" class="topo">
    <div :class="classe"><img src="/imagens/smite-logo.webp" alt="" /></div>
    <div class="search" @click="mostrarPorId()">
      <img v-if="mostrarPesquisa" src="/imagens/search.png" alt="" />
    </div>
    <a v-if="!mostrarPesquisa" href="/"
        ><div class="back"><img src="/imagens/back.png" alt="" /></div
      ></a>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed:{

  },
  mounted(){

  },
  created() {

  },
  methods: {
    mostrarPorId() {
        console.log('clique')
        this.$store.commit('ListarDeuses/SET_MODAL', true )
    }
  }
};
</script>