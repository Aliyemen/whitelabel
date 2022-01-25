<template lang="pug">
  v-row
    v-col( class="text-center")
      img(src="/logWhitelabel.png" alt="Vuetify.js" class="mb-5") 
      blockquote( class="blockquote") &#8220;Rota invalida.&#8221;
        footer
          small
            em &mdash;Pagina nao esta criada
</template>

<script>
export default {
  name: 'InspirePage',
   layout (context) {
    return 'home'
  } 
}
</script>
