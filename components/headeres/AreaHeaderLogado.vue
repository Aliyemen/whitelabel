<template lang="pug">
v-app-bar#app-toolbar-id(
  color="#14161f"
  flat
  clipped-left
  app
  height=60
  extension-height=56
)
  v-container
    v-row(justify="space-between" align="center") 
      v-col(cols="auto")
        nuxt-link(to="/")
          img.logo(
          height="32"
          width="120px"
          src="https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F3179b1043804c7652675892f7748b79a.png?alt=media&token=d43fef04-4ccb-4e81-8861-b4f86646382e"
          )
      v-col( align="center")
        v-text-field.searchbar-width(
          align-self,
          background-color="#ffffff",
          label="O que você está procurando?",
          single-line,
          filled,
          append-icon="mdi-magnify"
          hide-details
          dense
        )
      v-col(cols="auto" v-if="!me.name")
        v-row(justify="center")
          v-col(cols="auto")
            v-btn.border-opacity-50(dark, outlined, nuxt to="/login") Entre
          v-col(cols="auto")
            v-btn.primary(nuxt to="/register") Cadastre-se
      v-col(cols="auto" v-if="me.name")
       AvatarUsuario
          
  template(v-slot:extension)
    v-container
      v-row(align="center")
        v-col(cols="auto")
          v-menu(:key="me.name" :rounded="rounded" offset-y)
            template(v-slot:activator="{ attrs, on }")
              v-btn.border-opacity-10.ml-9(
                v-if="$vuetify.breakpoint.lgAndUp"
                v-bind="attrs"
                v-on="on"
                elevation="0"
                color="primary"
                outlined
              )
                | TODAS AS CATEGORIAS
              v-btn(
                v-else
                v-bind="attrs"
                v-on="on"
                color="primary"
                icon)
                v-icon mdi-menu
            v-list
              v-list-item(v-for="( item, key ) in items", :key="key", link :to="item.to" )
                v-list-item-title(v-text="item.title")
        v-col(cols="auto")
          v-row
            v-col.barra(cols="auto")
              v-divider.mx-2(vertical)
            v-col(cols="auto" v-for="(item ,  index ) in items", :key="index", link  )
              nuxt-link(:to="item.to").grey--text.text--darken-3.mx-0.mx-lg-2.font-weight-medium {{item.title}}
</template>

<script>
// import {logout} from '../common/logout'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      me: "modules/user/me",
    })
  },
  data: () => ({
     items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Finanças',
          to: '/financas',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Seguros e previdências',
          to: '/seguro',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Marketing',
          to: '/marketing',
        },
         {
          icon: 'mdi-chart-bubble',
          title: 'Dados Públicos',
          to: '/publicos',
        },
         {
          icon: 'mdi-chart-bubble',
          title: 'consulta Veicular',
          to: '/consulta',
        },
      ],
    rounded: true,
    expand: false,
  })
}
</script>

<style>
#app-toolbar-id > .v-toolbar__extension {
  background-color: #ffffff !important;
}

.barra{
  padding: 2px;
}

.height-header {
  height: 130px;
  width: 1280px;
  margin: auto;
}

.searchbar-width {
  max-width: 515px;
}

.border-opacity-50 {
  border-color: rgba(255, 255, 255, 0.5);
}

.border-opacity-10 {
  border-color: rgba(0, 0, 0, 0.1);
}

.logo{
  cursor: pointer;  
}

.btn{
  cursor: pointer;
}
</style>