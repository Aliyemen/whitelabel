<template>
  <v-app dark>
    <AreaHeader />
    <div class=" mt-16">
    <AreaSubHeader />
    </div>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <AreaFooter :fixed="fixed"/>
  </v-app>
</template>

<script>

export default {
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WhiteLabel',
    }
  },
}
</script>
