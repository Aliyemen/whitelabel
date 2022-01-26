<template lang="pug">
  v-row( justify="center" align="center")
    MainHome(:apis="apis")
</template>

<script>
export default {
  name: 'IndexPage',
  layout (context) {
    return 'home'
  },
  async fetch() {
    try {
      this.apis = await fetch("https://backend-gr1d.desenv.cloud.gr1d.io/apis").then((res) => res.json());
    } catch {
      return null;
    }
  },
   data() {
    return {
      apis: [],
    };
  },
}
</script>
