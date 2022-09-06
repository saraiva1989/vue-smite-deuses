<script setup>
defineProps({
  imagem: String,
  nome: String,
  titulo: String,
});
</script>
<template>
  <div class="banner">
    <div
      class="banner-img"
      :style="{ 'background-image': 'url(' + imagem + ')' }"
    >
      <div class="nome">
        <h1><b>{{nome}}</b></h1>
        <p>{{titulo}}</p>
      </div>
    </div>
  </div>
</template>