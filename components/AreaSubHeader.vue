<template lang="pug">
  v-card(class="d-flex justify-center mb-6 mt-2")
      v-btn(color="red"  v-for="i in items" :key="i.title"
        class="ml-2" :to="i.to" ) {{i.title}} 
</template>
<script>

export default {
  name: 'subHeader',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'TODAS AS CATEGORIAS',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Fianças',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Seguro e previdências',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Marketing',
          to: '/inspire',
        },
         {
          icon: 'mdi-chart-bubble',
          title: 'Dados Públicos',
          to: '/inspire',
        },
         {
          icon: 'mdi-chart-bubble',
          title: 'consulta Veicular',
          to: '/inspire',
        },
      ],
    }
  },
}
</script>