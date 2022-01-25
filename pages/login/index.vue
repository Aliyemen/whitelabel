<template lang="pug">
 div
   h1 aqui esta Login
   v-btn(v-if="!user.name" @class="entrarFake") Enterar fake
    
</template>

<script>
import {mapActions} from 'vuex'

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
      entrarFake: "modules/user/entrarFake",
    })
   }
  
    
}
</script>