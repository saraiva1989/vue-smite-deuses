<template>
  <!-- modal-pesquisa-show -->
  <div v-if="mostrarModal" id="modal-pesquisa" class="modal-pesquisa">
    <h2>Pesquisa</h2>
    <hr />
    <p>Cultura:</p>
    <select
      name="cultura"
      id="cultura"
      title="cultura"
      @change="pesquisa()"
      v-model="cultura"
    >
      <option value="Todos">Todos</option>
      <option value="Babilônio">Babilônio</option>
      <option value="Arthuriano">Arthuriano</option>
      <option value="Chinês">Chinês</option>
      <option value="Celta">Celta</option>
      <option value="Egípcio">Egípcio</option>
      <option value="Grego">Grego</option>
      <option value="Os Grandes Antigos">Os Grandes Antigos</option>
      <option value="Hindu">Hindu</option>
      <option value="Japonês">Japonês</option>
      <option value="Maia">Maia</option>
      <option value="Nórdico">Nórdico</option>
      <option value="Polinésio">Polinésio</option>
      <option value="Romano">Romano</option>
      <option value="Eslavo">Eslavo</option>
      <option value="Vodu">Vodu</option>
      <option value="Iorubá">Iorubá</option>
    </select>

    <p>Classe:</p>
    <select
      name="classe"
      id="classe"
      title="classe"
      @change="pesquisa()"
      v-model="classe"
    >
      <option value="Todos">Todos</option>
      <option value="Guardião">Guardião</option>
      <option value="Mago">Mago</option>
      <option value="Guerreiro">Guerreiro</option>
      <option value="Caçador">Caçador</option>
      <option value="Assassino">Assassino</option>
    </select>
    <p>Nome:</p>
    <input
      id="nome-deus"
      type="text"
      @keyup="pesquisa()"
      placeholder="Pesquisar por nome"
      v-model="nome"
    />
    <button @click="ocultarModal()">fechar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cultura: "Todos",
      classe: "Todos",
      nome: "",
      listaDeusesFiltro: []
    };
  },
  computed: {
    mostrarModal() {
      return this.$store.state.ListarDeuses.GET_MODAL;
    },
  },

  methods: {
    ocultarModal() {
      this.$store.commit("ListarDeuses/SET_MODAL", false);
    },

    pesquisa() {
      console.log(this.cultura);
      this.listaDeusesFiltro = this.$store.state.ListarDeuses.GET_LISTADEUSES;
      this.pesquisarDeus(this.nome);
      this.pesquisarCultura(this.cultura);
      this.pesquisarClasse(this.classe);
      this.$store.commit("ListarDeuses/SET_LISTADEUSESFILTRO", this.listaDeusesFiltro);
    },

    pesquisarDeus(nome) {
      this.listaDeusesFiltro = this.listaDeusesFiltro.filter((x) =>
        x.nome
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            nome
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      );
    },

    pesquisarCultura(cultura) {
      if (cultura == null || cultura == "Todos") {
        cultura = "";
      }
      this.listaDeusesFiltro = this.listaDeusesFiltro.filter((x) =>
        x.cultura.toLowerCase().includes(cultura.toLowerCase())
      );
    },

    pesquisarClasse(classe) {
      if (classe == null || classe == "Todos") {
        classe = "";
      }
      this.listaDeusesFiltro = this.listaDeusesFiltro.filter((x) =>
        x.classe.toLowerCase().includes(classe.toLowerCase())
      );
    },
  }
};
</script>