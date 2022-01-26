<template lang="pug">
div(class="mt-4")
  v-container.pa-0
      v-img.align-center(
        height='500px' 
        src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F1ecef7a726ed2d4b00032f2158144cf4?alt=media&token=9f1a1757-77ff-49e1-b7ca-2ba40b4ebbef'          
        )
        .px-8
          h1.gr1d--title {{ title }}
          h2.gr1d--subtitle {{ subtitle }}
          v-container
            .gr1d--section-title
              .gr1d--texts
                h3 Recomendados
                h4  API&rsquo;s recomendadas pelo nosso time de especialistas
              
                v-container
                    v-row(dense)
                      v-col(
                        xs=12
                        sm=12
                        md=6
                        lg=4
                        xl=4
                        v-for="(product, index) of apis" :key="index"
                      )
                        a(@click="details('apiDetails', product.id)")
                          CardApi.mr-4(
                              :title='product.name'
                              :subtitle='product.provider'
                              :description='product.description'
                              img='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F9dd167b2a68521cb930800ae16906724.png?alt=media&token=9c4984c7-2ff5-4b96-86f5-d66df26b2aba'
                              :categories="['Categoria']"
                            )
              
          
</template>
<script>

export default {
  name: "Main",
  props:{
    apis:{ 
      type: Array,
      require:true
    }

  },
  data() {
    return {
      title: 'Título da página',
      subtitle: 'Subtítulo da página',
    };
  },
  methods: {
    details(path, id){
      this.$router.push({path, query: {id: id} })
    }
  }
};
</script>

<style>
@media (min-width: 1904px){
  .container{
    max-width: 1185px
  }
}
</style>

<style scoped>
.gr1d--main {
  height: 100%;
}

.gr1d--home-img {
  padding-top: 88px;
  width: 100%;
  height: 410px;
  max-width: 1280px;
  margin: auto;
  padding: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url();
}

.gr1d--home-img > div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.gr1d--title {
  white-space: pre-line;
  font-weight: 700;
  font-size: 56px;
  color: #ffffff;
}

.gr1d--subtitle {
  padding-top: 8px;
  white-space: pre-line;
  font-weight: 300;
  font-size: 20px;
  color: #bec0cc;
}

.gr1d--section-title h3 {
  font-weight: 500;
  font-size: 32px;
  color: #14161f;
  margin-top: 70px;
}

.gr1d--section-title h4 {
  padding-top: 8px;
  font-weight: 500;
  font-size: 16px;
  color: #5e6475;
}

section#apis1 {
  max-width: 1280px;
  padding: 112px 31px 0 32px;
  margin: auto;
  position: relative;
}

section#caso-uso {
  padding: 112px 31px 0 32px;
  max-width: 1280px;
  margin: auto;
  position: relative;
}

section#apis2 {
  padding: 112px 32px 0 32px;
  max-width: 1280px;
  margin: auto;
  position: relative;
}

.gr1d--section-title {
  display: flex;
  width: 100%;
  align-items: flex-end;
}

.gr1d--section-title > .gr1d--texts {
  flex: 1;
}

.gr1d--section-title > .gr1d--btn {
  display: flex;
  align-items: flex-end;
  height: 100%;
}

.gr1d--section-title button {
  background-color: #ffffff !important;
}

</style>
