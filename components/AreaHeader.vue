<template  lang="pug">
div
    v-navigation-drawer( v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app)
    
      v-list
        v-list-item( v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact)
        
          v-list-item-action
            v-icon {{ item.icon }}
          
          v-list-item-content
            v-list-item-title( v-text="item.title") 
    v-app-bar( :clipped-left="clipped" fixed app)
      v-app-bar-nav-icon( @click.stop="drawer = !drawer") 
      v-btn( icon @click.stop="miniVariant = !miniVariant")
        v-icon mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
      v-btn(icon @click.stop="clipped = !clipped")
       WhitelabelLogo 
      v-spacer
      AriaBusca
      v-spacer 
      AriaLogada
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