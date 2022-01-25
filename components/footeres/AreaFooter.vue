<template lang="pug">
  v-footer(padless)
    .doubt(v-if="fixed")
      v-container
        v-row(justify="space-around")
          v-col(cols="6")
            h2.doubt-text Ficou alguma dúvida?
            h4.doubt-text Podemos ajudar?
            v-btn.primary.secondary-text.about.px-6( nuxt to="/help")  Fale Conosco 
          v-col(cols="6")
            .grey.lighten-2.align-center.d-flex.justify-center(style="width: 500px; height: 300px;")
              img(src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F9dd167b2a68521cb930800ae16906724.png?alt=media&token=9c4984c7-2ff5-4b96-86f5-d66df26b2aba')
    div(style="width: 100%;")
      v-container.organization-info
        .left-flex
          img.logo-footer(width='120px' src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F8312a28e877edc8b64d95f5cefa5f42a.png?alt=media&token=cf507e4a-a883-40e0-be84-22e886b39c5c')
        .right-flex
          .infos
            .links
              span.font-weight-black.subtitle-2  Links úteis
              span.font-weight-medium.body-2
                span.cursorOn(nuxt to ="/termsPolicy") Termos de uso
              span.font-weight-medium.body-2
                span.cursorOn(@click="goTo('termsPolicy?type=privacy')") Política de privacidade
              span.font-weight-medium.body-2
                span.cursorOn(@click="goTo('help')") Fale conosco
            .contacts
              span.font-weight-black.subtitle-2 Contato
              span.font-weight-medium.body-2 +55 11 00000 0000
              .social
                a
                  img.social-img(width='16px' height='16px' src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2021%2F12%2Fffa9a624b149ccb3fe150e119e776646?alt=media&token=f3f64b93-1843-4278-be3b-4f2f5a3de203')
                a
                  img.social-img(width='16px' src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2021%2F12%2F696409c9e47f93e30f913ae2e1a67e5c?alt=media&token=e1fd7007-4818-44cb-a9f7-8d2b2309571c')
                a
                  img.social-img(width='16px' src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2021%2F12%2F4733aea982260da7ae10f5bf51d8f979?alt=media&token=93e6a7ce-4696-4622-af2e-7ce1a9203598')
                a
                  img.social-img(width='16px' src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2021%2F12%2F7f3f463c7a9d1b74698223bdee1eb22f?alt=media&token=9e9e69a0-1370-4576-98e7-04faf9b41c3c')
      .footer-final
        .hr
        .cnpj {{cnpjInfo}}
</template>

<script>
export default {
  name: "FooterLayout",
  props: {
    fixed: {type: Boolean, default: false},
  },
  data() {
    return {
      cnpjInfo: `Razão social - CNPJ`,
    };
  },
  methods:{
    goTo(path) {
      this.$router.push(path)
    },
  }
};
</script>

<style scoped>
.logo-footer {
  padding-bottom: 32px;
}

.about {
  margin-top: 24px;
  width: fit-content;
}

.doubt-text-div {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h4.doubt-text {
  font-weight: 500;
  font-size: 20px;
  padding-top: 8px;
  text-align: left;
  color: #000000;
}
.doubt-text {
  font-weight: 700;
  font-size: 40px;
  text-align: left;
}
.footer {
  margin: auto;
}

.doubt {
  background: #f7f8fa;
  width: 100%;
}

@media only screen and (max-width: 720px) {
  .doubt > div {
    padding: 42px 10px !important;
  }
}

.doubt > div {
  max-width: 1280px;
  position: relative;
  display: flex;
  min-height: 384px;
  padding: 42px 135px;
  margin: auto;
  flex-wrap: wrap;
  gap: 20px;
}

.doubt > div > div {
  flex: 1;
}

.doubt-img {
  display: flex;
  justify-content: flex-end;
}

.doubt-img > img {
  object-fit: scale-down;
}

.dots {
  position: absolute;
  bottom: 32px;
  left: 32px;
}

.organization-info {
  max-width: 1280px;
  margin: auto;
  padding: 48px 32px 92px 32px;
  display: flex;
  flex-wrap: wrap;
}

.left-flex {
  flex: 0.55;
}

.left-flex span {
  white-space: pre-line;
}

.right-flex {
  flex: 0.45;
}

.right-flex > .infos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.right-flex > .infos > div {
  flex: 1;
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.social {
  display: flex;
  gap: 20px;
}

.social > a {
  padding: 12px;
  border: 1px solid #edeef2;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border-radius: 4px;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hr {
  border-top: 1px solid #dbdde5;
}

.footer-final {
  max-width: 1280px;
  padding: 0 32px 16px 32px;
  margin: auto;
}

.cnpj {
  padding-top: 16px;
  color: #5e6475;
  font-weight: 300;
  font-size: 12px;
  white-space: pre-line;
}

.cursorOn {
  cursor: pointer;
}
</style>
