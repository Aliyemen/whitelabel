<template lang="pug">
  v-app( dark)
    h1( v-if="error.statusCode === 404") {{ pageNotFound }}
    h1( v-else) {{ otherError }}
    NuxtLink(to="/") Home page 
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'home',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Página não existe',
      otherError: 'Ocorreu erro nesta página',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
