<script setup>
defineProps({
  cardDeus: {},
});
</script>


<template>
  <div id="card-deus" class="card-deus">
    <div class="avatar">
      <img
        :src="cardDeus.imagem.replace('\'', '')"
        class="avatar-background"
        loading="lazy"
      />
      <div class="nome">
        <h1>
          <b>{{ cardDeus.nome }}</b>
        </h1>
      </div>
    </div>

    <div class="detalhe-deus">
      <p>
        <b>{{ cardDeus.titulo }}</b>
      </p>
      <p><b>Cultura:</b> {{ cardDeus.cultura }}</p>
      <p><b>Classe:</b> {{ cardDeus.classe }}</p>
      <p><b>Tipo:</b> {{ cardDeus.tipo }}</p>
      <div class="btn-padrao">
        <router-link :to="gerarLink(cardDeus.nomeEN)">Mais Info</router-link>
        <!-- <a href="detalhe-deus/#/?The Morrigan">Mais Info</a> -->
      </div>
      <div
        v-if="mostrarCompartilhar"
        class="btn-padrao"
        id="compartilhar"
        @click="compartilhar(cardDeus.nomeEN)"
      >
        <a>compartilhar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarCompartilhar: false,
    };
  },
  methods: {
    gerarLink(nome) {
      return `detalhe-deus/?${nome}`;
    },
    compartilhar(nome) {
      if (navigator.share) {
        var url = `/#/detalhe-deus/?${nome}`;
        navigator
          .share({
            title: "Deuses Smite",
            text: `Veja mais sobre a ${nome}`,
            url: url,
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      } else {
        console.log("Share not supported on this browser, do it the old way.");
      }
    },
  },
  mounted() {
    if (window.innerWidth < 1025) {
      this.mostrarCompartilhar = true;
    }
  },
};
</script>