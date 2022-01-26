<template lang="pug">
  #gr1d--header
    .gr1d--header-content
      slot
    .gr1d--header-menu
      NuxtLink(to="/")
          v-icon.grey-darken-3  mdi-storefront-outline 
          |  Marketplace
          AvatarUsuario( v-if="me.name" :stylIcon='"white"')
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
    rounded: true,
    expand: false,
  })
}
</script>

<style scoped>
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
.gr1d--header-menu > a {
    padding-right: 32px;
    color: #424242;
    font-size: 14px;
}
</style>