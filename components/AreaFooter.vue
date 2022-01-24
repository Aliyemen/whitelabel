<template lang="pug">
     v-footer( :absolute="!fixed" app)
      span &copy; {{ new Date().getFullYear() }}
   
</template>
<script>
export default {
     name: 'footer',
     props:{
         fixed:{ 
             type :Boolean ,
             require:false,
             default :false
         }
     }

}
</script>