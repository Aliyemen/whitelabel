<template lang="pug">
 div
   h1 aqui esta Login
   v-btn(v-if="!user || !user.name" @click="logIn()") Entrar fake
    
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  layout (context) {
    return 'home'
  },
  computed: {
    ...mapGetters({
      user: "modules/user/me",
    }),
  },
   methods: {
      ...mapActions({
       logInFake: "modules/user/logInFake",
    }),
    logIn(){
      this.logInFake();
    }
   }
  
    
}
</script>