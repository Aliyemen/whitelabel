<template lang="pug">
  v-row(justify="center")
      v-col( v-if ="admin" cols="auto" )
        NuxtLink( class="admin" to="/")
              v-icon.grey-darken-3  mdi-storefront-outline
              | Marketplace 
      v-col(cols="auto")
        v-menu(:key="text" :rounded="rounded" offset-y)
          template(v-slot:activator='{ on, attrs }' @click="expand = !expand")
            .gr1d--avatar(v-bind='attrs' v-on='on')
              .gr1d--avatar-img
                v-avatar(color="red" size="35")
                  v-tooltip( left color="error")
                    template( v-slot:activator="{ on, attrs }")
                      span( class="white--text text-h6 text-uppercase" v-bind="attrs"  v-on="on") {{nomeUsuario}}
                    span {{me.name}}
              v-icon( :color="admin ?' grey-darken-3' :'brown lighten-5'")  mdi-chevron-down
    
          v-list
            v-list-item(to="/usuario")
              v-list-item-title(
              ).btn Minha conta
            v-list-item(to="/apiconsumed")
              v-list-item-title(
              ).btn Minhas API's
            v-list-item(to="/help")
              v-list-item-title(
                
              ).btn Ajuda
            v-list-item( @click="logoutSend()" to="/")
              v-list-item-title.btn Sair
  
</template>
<script>
import { stringify } from 'qs';
import {mapGetters, mapActions} from 'vuex'
// usuario
export default {
  props:{
    admin:{ 
      type:Boolean,
      default:false
    }
  },
  computed: {
    ...mapGetters({
      me: "modules/user/me",
    }),
    text(){
      return this.me.name;
    },
    nomeUsuario(){
      return this.me && this.me.name && typeof this.me.name == 'string' ? this.me.name.substring(0, 2): '' ;
    }
  },
  data: () => ({
    rounded: true,
    expand: false,
  }),
  methods: {
      ...mapActions({
      apiGet: "modules/user/apiGet",
      logOutFake: "modules/user/logOutFake"
    }),
    logoutSend(){
      // this.apiGet('/logout?token='+this.me.token);
      this.logOutFake()

    },
  }
}
</script>

<style scoped>

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
.admin {
    padding-right: 32px;
    color: #424242;
    font-size: 14px;
}

.btn{
  cursor: pointer;
}
</style>