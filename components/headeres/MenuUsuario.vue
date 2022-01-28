<template lang="pug">
  v-navigation-drawer.gr1d--drawer(v-bind:style="{ width: widthDrawer + 'px' }")
    .gr1d--drawer-content
      .gr1d-header(v-bind:style="{ height: height + 'px' }")
        div
          NuxtLink( to="/")
            img(v-show='widthDrawer === 256' alt='logo' height='32px' src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2022%2F01%2F23abeb7fc8a4c0de6ace6b16d4e67e1f.png?alt=media&token=5026f7de-4c5c-4d26-8da5-310b56c05a71')
          v-btn.gr1d--btn-hover(v-show='widthDrawer !== 256' @click='changeDrawer' icon='')
            img(alt='btn drawer' src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2021%2F12%2Fd97b860f13ecb3350697ad35adc1b19b?alt=media&token=7d7aab64-80f3-4327-bee7-c82911ca11e8')
        v-btn(v-if='widthDrawer === 256' @click='changeDrawer' icon='')
          img(alt='btn drawer' src='https://firebasestorage.googleapis.com/v0/b/beyond-quoti.appspot.com/o/beyond%2F2021%2F12%2F50127d7db75c9b5ea2ced6e27eef1955?alt=media&token=91d342b3-7c78-41ee-8541-04ab638f3e5f')
      .gr1d-content
        v-list.gr1d--list
          v-list-item-group(v-model='selectedItem' color='primary')
            v-list-item(to='/usuario')
              v-list-item-icon
                v-icon mdi-account
              v-list-item-content
                v-list-item-title Minha conta
            v-list-item(to='/thema')
              v-list-item-icon
                v-icon mdi-wrench
              v-list-item-content
                v-list-item-title Thema
</template>

<script>
export default {
  name: "MenuAdmin",
  components: {},
  data() {
    return {
      waitDrawer: false,
      widthDrawer: 256,
      showBtn: false,
      selectedItem: 0,
      height: 67,
    };
  },
  methods: {
    changeDrawer() {
      if (this.widthDrawer === 256) {
        this.widthDrawer = 80;
        this.waitDrawer = true;
        setTimeout(() => {
          this.waitDrawer = false;
        }, 100);
      } else {
        this.widthDrawer = 256;
      }
    },
  },
};
</script>

<style scoped>
.gr1d--list {
  padding-top: 16px;
}

.gr1d--list .v-list-item__icon {
  margin-right: 16px;
  margin-left: 14px;
}

.gr1d--drawer {
  display: flex;
  flex-direction: column;
}

.gr1d-header {
  display: flex;
  padding: 16px 32px;
}

.gr1d-header > div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 36px;
}

.gr1d-header > div > img {
  object-fit: scale-down;
}

.gr1d--btn-hover {
  position: relative;
  right: 10px;
}

.v-list-item__icon {
  margin: 8px;
}

.v-list-item__content {
  padding: 10px 0;
}

.v-list-item {
  min-height: 40px;
}
</style>
