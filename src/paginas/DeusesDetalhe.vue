<script setup>
import Topo from "../components/generico/Topo.vue";
import Loading from "../components/generico/Loading.vue";
import Banner from "../components/DetalheDeuses/Banner.vue";
import CardTipo from "../components/DetalheDeuses/CardTipo.vue";
import CardHistoria from "../components/DetalheDeuses/CardHistoria.vue";
import CardSkin from "../components/DetalheDeuses/CardSkin.vue";
import TabelaHabilidade from "../components/DetalheDeuses/TabelaHabilidades.vue";
import TabelaMobile from "../components/DetalheDeuses/TabelaMobile.vue";
import ModalVideo from "../components/DetalheDeuses/ModalVideo.vue";
</script>
<template>
  <Loading />
  <Topo classe="logo detalhe-logo" :mostrarPesquisa="false" />
  <ModalVideo :mostrar="mostrar" />
  <div id="principal">
    <div id="conteudo-detalhe">
      <Banner
        :imagem="deus.urlBanner"
        :nome="deus.nome"
        :titulo="deus.titulo"
      />

      <div class="card-detalhe flex">
        <CardTipo :valor="deus.classe" descricao="Classe" />
        <CardTipo :valor="deus.cultura" descricao="Cultura" />
        <CardTipo :valor="deus.tipo" descricao="Tipo" />
      </div>

      <CardHistoria
        :youtube="deus.urlVideoHistoria"
        :historia="deus.historia"
      />

      <div v-if="tabelaMobile">
        <TabelaMobile />
      </div>
      <div v-else>
        <TabelaHabilidade />
      </div>

      <div class="card-detalhe">
        <div>
          <h1>skins</h1>
        </div>
        <hr />
        <br />
        <div class="flex">
          <div
            id="card-deus"
            class="card-deus"
            v-for="(skin, index) in deus.skins"
            :key="index"
          >
            <CardSkin
              :imagem="skin.imagem"
              :nome="skin.nome"
              :tipo="skin.tipo"
              :favor="skin.favor"
              :gema="skin.gema"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      deus: {},
      tabelaMobile: false,
    };
  },

  computed: {
    mostrar() {
      return this.$store.state.DetalheDeuses.GET_MODAL;
    },
  },

  async created() {
    await this.$store.dispatch("DetalheDeuses/buscarDeus", {
      slug: window.location.hash.split("?")[1],
    });

    this.deus = this.$store.state.DetalheDeuses.GET_DEUS;
    console.log(
      "🚀 ~ file: DeusesDetalhe.vue ~ line 74 ~ created ~ this.deus",
      this.deus
    );
    // setTimeout(() => {
    //   this.listaDeuses = this.listaDeuses.filter(x => x.classe == "Mago")
    //   console.log(this.listaDeuses)
    // }, 5000);
  },
  mounted() {
    window.scrollTo(0, 0);
    if (window.innerWidth < 1025) {
      this.tabelaMobile = true;
    }
  },
};
</script>