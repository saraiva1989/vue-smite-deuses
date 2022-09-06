<script setup>
defineProps({
  youtube: String,
  historia: String,
});
</script>

<template>
  <div class="card-detalhe">
    <div>
      <h1>História</h1>
    </div>
    <hr />
    <div class="embed-responsive">
      <iframe :src="montarUrlYoutube(youtube)" allowfullscreen=""></iframe>
    </div>
    <div class="conteudo-detalhe" v-html="conteudoHistoria"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conteudoHistoria: "",
    };
  },
  methods: {
    montarUrlYoutube(link) {
      return `https://www.youtube.com/embed/${link}?showinfo=0`;
    },
  },

  mounted() {
    if(this.$props.historia == undefined) {
        return
    }
    this.conteudoHistoria = this.$props.historia
      .replaceAll("\\n", "<br>")
      .replaceAll('"', "");
  },
  beforeUpdate() {
    this.conteudoHistoria = this.$props.historia
      .replaceAll("\\n", "<br>")
      .replaceAll('"', "");
  },
};
</script>