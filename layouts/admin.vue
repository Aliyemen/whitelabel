<template lang="pug">
  v-app
    div( class="gr1d--layout")
      MenuAdmin
      div( class="gr1d--layout-header-content")
        HeaderAdmin( name="Gr1d Teste")
          slot( name="header")
        div( class="gr1d--layout-content")
          Nuxt 
</template>

<script>

export default {
}
</script>


<style scoped>

.gr1d--layout {
  display: flex;
  height: 100%;
}
.gr1d--layout-header-content {
  flex: 1;
}

.v-chip {
  background-color: #F5F5F5 !important;
}

.v-chip__content {
  color: #4068E4;
}

.gr1d-version-status .v-chip__content {
  color: #757575;
}
</style>
