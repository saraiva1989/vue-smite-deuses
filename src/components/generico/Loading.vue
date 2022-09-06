<template>
  <div  v-if="loading" style="width: 100%; height:100vh; background: #121212; z-index: 10; position: fixed">
    <div
      id="loading"
      class="loader"
      style="display: block"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //  loading: this.$store.state.ListarDeuses.GET_LOADING,
    };
  },
  computed: {
    loading() {
      return this.$store.state.ListarDeuses.GET_LOADING;
    },
  },
};
</script>