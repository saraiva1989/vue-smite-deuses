<script setup>
</script>

<template>
  <div class="card-detalhe">
    <div>
      <h1>Habilidades</h1>
    </div>
    <hr />
    <br />
    <table>
      <thead>
        <tr>
          <th class="text-left"></th>
          <th class="text-left">Nome</th>
          <th class="text-left">Descrição</th>
          <th class="text-left">info Habilidade</th>
          <th class="text-left">tipo Habilidade</th>
          <th class="text-left"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(habilidade, index) in deus.habilidades" :key="index">
          <td>
            <div>
              <img :src="habilidade.imagem" alt="" srcset="" />
            </div>
          </td>
          <td>{{ habilidade.nome }}</td>
          <td class="descricao-habilidade">
            {{ habilidade.descricao }}
          </td>
          <td>
            <ul
              v-for="(
                infoPoderHabilidade, index
              ) in habilidade.infoPoderHabilidades"
              :key="index"
            >
              <li>
                <b>{{ infoPoderHabilidade.descricao }}</b>
                {{ infoPoderHabilidade.valor }}
              </li>
            </ul>
          </td>
          <td>
            <ul
              v-for="(poderHabilidade, index) in habilidade.infoHabilidades"
              :key="index"
            >
              <li>
                <b>{{ poderHabilidade.descricao }}</b>
                {{ poderHabilidade.valor }}
              </li>
            </ul>
          </td>
          <td>
            <button
              type="button"
              class="btn-video"
              @click="ModalHabilidade(habilidade.urlVideo, 500, 700)"
            >
              <span> Video Habilidade </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // deus: this.$store.state.DetalheDeuses.GET_DEUS,
    };
  },
  computed: {
    deus() {
      return this.$store.state.DetalheDeuses.GET_DEUS;
    },
  },
  methods: {
    ModalHabilidade(url, altura, largura) {
      this.$store.commit("DetalheDeuses/SET_MODAL", true);
      this.$store.commit("DetalheDeuses/SET_YOUTUBE", url);
      this.$store.commit("DetalheDeuses/SET_ALTURA", altura);
      this.$store.commit("DetalheDeuses/SET_LARGURA", largura);

      //this.$store.state.DetalheDeuses.GET_MODAL
    },
  },
};
</script>