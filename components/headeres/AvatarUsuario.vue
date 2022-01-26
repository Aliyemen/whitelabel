<template lang="pug">
 v-row(justify="center")
          v-col(cols="auto")
            v-menu(:key="text" :rounded="rounded" offset-y)
              template(v-slot:activator='{ on, attrs }' @click="expand = !expand")
                .gr1d--avatar(v-bind='attrs' v-on='on')
                  .gr1d--avatar-img
                    v-avatar(color="red" size="35")
                      span( class="white--text text-h6 text-uppercase") {{nomeUsuario}}
                    p {{me.name}}
                  v-icon(dark)  mdi-chevron-down
              v-list
                v-list-item(to="/apiconsumed")
                  v-list-item-title(
                  ).btn Minha conta
                v-list-item(to="/help")
                  v-list-item-title(
                   
                  ).btn Ajuda
                v-list-item( @click="logoutSend()" to="/")
                  v-list-item-title.btn Sair
    
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

.btn{
  cursor: pointer;
}
</style>