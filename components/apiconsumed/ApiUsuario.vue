<template lang="pug">
 div( class="gr1d--cards")
    //- ApiConsumedCard(
    //-   :id="1"
    //-   title="Título API"
    //-   img="https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F24bac318f7194d1467f574d14427d585.png?alt=media&token=3ea36468-2fe5-447a-a80f-c1dfbec06462"
    //-   status="Categoria"
    //-   version="1.2"
    //- )

    div(class="gr1d--no-data")
      div( class="gr1d--no-data-circle")
        v-icon( v-text="'mdi-code-tags'")
      h4 Descubra APIs no nosso Marketplace
      h5 Seja qual for a sua necessidade, existe uma API que pode te ajudar.
      v-btn( class="red white--text" nuxt to="/")
        v-icon mdi-open-in-new 
        | Explorar APIs 
        
    
</template>

<script>
export default {
  name: "Search",
    
}
</script>

<style>
.gr1d--cards {
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.gr1d--no-data-circle {
  width: 184px;
  height: 184px;
  background: #eeeeee;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gr1d--no-data-circle i {
  font-size: 80px !important;
  color: #9e9e9e;
}

.gr1d--no-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 176px);
  width: 100%;
}

.gr1d--no-data h4 {
  padding-top: 32px;
  font-weight: 500;
  font-size: 20px;
  color: #757575;
}

.gr1d--no-data h5 {
  padding-top: 8px;
  padding-bottom: 32px;
  font-weight: 400;
  font-size: 16px;
  color: #9e9e9e;
}
</style>
