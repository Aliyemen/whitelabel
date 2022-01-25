<template lang="pug">
  v-row( justify="center" align="center")
    v-col( cols="12" sm="8" md="6")
      v-card( class="logo py-4 d-flex justify-center")
        WhitelabelLogo
    
      v-card
        v-card-title( class="headline") SEJA BEM VINDO
        v-card-text
          h1 Refaturação whitelabel
          br
        
        v-card-actions
          v-spacer 
          v-btn(  nuxt to="/inspire") Continue
</template>

<script>
export default {
  name: 'IndexPage',
  layout (context) {
    return 'home'
  }
}
</script>
