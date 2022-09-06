<script setup>
defineProps({
  imagem: String,
  nome: String,
  tipo: String,
  favor: Number,
  gema: Number,
});
</script>
<template>
    <div class="avatar">
      <div
        class="avatar-background"
        alt="Avatar"
        :style="[{ 'background-image': 'url(' + imagem + ')' }, {'background-repeat': 'round'}]"
      >
        <div class="nome">
          <h1><b>{{nome}}</b></h1>
        </div>
      </div>
    </div>

    <div class="">
      <p>{{tipo}}</p>
      <p><b>Favor: </b>{{favor}}</p>
      <p><b>Gema: </b>{{gema}}</p>
    </div>
</template>