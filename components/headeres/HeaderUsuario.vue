<template lang="pug">
v-card
    v-card-title  Minha conta
        v-spacer
        v-spacer
        AvatarUsuario(:admin="true" align="end") 
      
      
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      me: "modules/user/me",
    }),
    text(){
      return this.me.name;
    },
    nomeUsuario(){
      return !this.me &&  !this.me.name ? '': this.me.name.substring(0, 2) ;
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