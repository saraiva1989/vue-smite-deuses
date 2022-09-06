<script setup>
defineProps({
  valor: String,
  descricao: String
});
</script>

<template>
  <div class="item">
    <h1>{{descricao}}</h1>
    <p><img :src="retornarImagemClasse(valor)" style="height: 100px" /></p>
    <p>{{ valor }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    retornarImagemClasse(classe) {
      switch (classe) {
        case "Guardião":
          return "imagens/guardiao.png";
        case "Mago":
          return "imagens/mago.png";
        case "Guerreiro":
          return "imagens/guerreiro.png";
        case "Caçador":
          return "imagens/cacador.png";
        case "Assassino":
          return "imagens/assassino.png";
        case "Babilônio":
          return "imagens/babilonio.png";
        case "Arthuriano":
          return "imagens/arturiano.png";
        case "Chinês":
          return "imagens/chines.png";
        case "Celta":
          return "imagens/celta.png";
        case "Egípcio":
          return "imagens/egipcio.png";
        case "Grego":
          return "imagens/grego.png";
        case "Os Grandes Antigos":
          return "imagens/grande.png";
        case "Hindu":
          return "imagens/hindu.png";
        case "Japonês":
          return "imagens/japones.png";
        case "Maia":
          return "imagens/maia.png";
        case "Nórdico":
          return "imagens/nordico.png";
        case "Polinésio":
          return "imagens/polinesio.png";
        case "Romano":
          return "imagens/romano.png";
        case "Eslavo":
          return "imagens/eslavo.png";
        case "Vodu":
          return "imagens/vodu.png";
        case "Iorubá":
          return "imagens/ioruba.png";
        default:
          return "imagens/mago.png";
      }
    },
  },
};
</script>