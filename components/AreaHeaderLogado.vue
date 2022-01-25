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
        img.logo(
        height="32"
        width="120px"
        src="https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F3179b1043804c7652675892f7748b79a.png?alt=media&token=d43fef04-4ccb-4e81-8861-b4f86646382e"
        nuxt to="/home')"
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
        v-row(justify="center")
          v-col(cols="auto")
            v-menu(:key="text" :rounded="rounded" offset-y)
              template(v-slot:activator='{ on, attrs }' @click="expand = !expand")
                .gr1d--avatar(v-bind='attrs' v-on='on')
                  .gr1d--avatar-img
                    qt-avatar(:username='`${me.name}`')
                  v-icon(dark)  mdi-chevron-down
              v-list
                v-list-item
                  v-list-item-title(
                    nuxt to="/apiconsumed"
                  ).btn Minha conta
                v-list-item
                  v-list-item-title(
                    nuxt to="/help"
                  ).btn Ajuda
                v-list-item
                  v-list-item-title(
                    @click="logoutSend()"
                  ).btn Sair
          
  template(v-slot:extension)
    v-container
      v-row(align="center")
        v-col(cols="auto")
          v-menu(:key="text" :rounded="rounded" offset-y)
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
              v-list-item(v-for="item in items", :key="item", link)
                v-list-item-title(v-text="item")
        v-col(cols="auto")
          v-row
            v-col.barra(cols="auto")
              v-divider.mx-2(vertical)
            v-col(cols="auto")
              a.grey--text.text--darken-3.mx-0.mx-lg-2.font-weight-medium Finanças
            v-col(cols="auto")
              a.grey--text.text--darken-3.mx-0.mx-lg-2.font-weight-medium Seguros e previdência
            v-col(cols="auto")
              a.grey--text.text--darken-3.mx-0.mx-lg-2.font-weight-medium Marketing
            v-col(cols="auto")
              a.grey--text.text--darken-3.mx-0.mx-lg-2.font-weight-medium Dados Públicos
            v-col(cols="auto")
              a.grey--text.text--darken-3.mx-0.mx-lg-2.font-weight-medium Comunicação
            v-col(cols="auto")
              a.grey--text.text--darken-3.mx-0.mx-lg-2.font-weight-medium Consulta Veicular
</template>

<script>
// import {logout} from '../common/logout'
import {mapGetters} from 'vuex'

export default {
   name: 'AreaHeader',
  computed: {
    ...mapGetters("user", ["me"])
  },
  data: () => ({
    items: [
      "Finanças",
      "Seguros e previdência",
      "Marketing",
      "Dados Públicos",
      "Comunicação",
      "Consulta Veicular"
    ],
    expand: false,
  }),
  methods: {
    logoutSend(){
    },
  }
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

.gr1d--avatar {
  display: flex;
  gap: 10;
}

.gr1d--avatar-img {
  border: 2px solid var(--v-primary-base);
  border-radius: 40px;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gr1d--avatar img {
  height: 40px;
  width: 40px;
}

.btn{
  cursor: pointer;
}
</style>