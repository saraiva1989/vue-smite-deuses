<script setup>
defineProps({
  mostrar: Boolean,
});
</script>
<template>
  <div v-if="mostrar" id="modal" class="modal" style="display: block">
    <iframe
      :src="url"
      allowfullscreen="allowfullscreen"
      :height="altura"
      :width="largura"
      frameborder="0"
    ></iframe>
    <div class="btn-padrao fechar" id="fechar">
      <a @click="fechar()">Fechar</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      altura: this.$store.state.DetalheDeuses.GET_ALTURA,
      largura: this.$store.state.DetalheDeuses.GET_LARGURA,
    };
  },
  computed: {
    url() {
      return `https://www.youtube.com/embed/${this.$store.state.DetalheDeuses.GET_YOUTUBE}?showinfo=0&autoplay=1`;
    },
  },
  methods: {
    fechar() {
      this.$store.commit("DetalheDeuses/SET_MODAL", false);
    },
  },
};
</script>