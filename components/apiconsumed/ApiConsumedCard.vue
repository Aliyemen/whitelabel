<template>
  <router-link :to="'apiconsumed?api=' + id">
    <div @click="changeDrawer" class="gr1d--api-consumed-card">
      <img :alt="title" v-bind:src="img" />
      <h3>
        {{ title }}
      </h3>
      <div style="padding-top: 16px" class="gr1d-version-status">
        <h4>Versão</h4>
        <h5>{{ version }}</h5>
      </div>
      <div class="gr1d-version-status">
        <h4>Status</h4>
        <v-chip>{{ status }}</v-chip>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ApiConsumedCard",
  components: {},
  props: ["id", "title", "img", "version", "status"],
};
</script>

<style scoped>
.gr1d--api-consumed-card {
  width: 228px;
  height: 240px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px 24px 25px 24px;
}

.gr1d--api-consumed-card > img {
  width: 56px;
  height: 56px;
  object-fit: scale-down;
}

.gr1d--api-consumed-card > h3 {
  padding-top: 24px;
  padding-bottom: 16px;
  color: #212121;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid#EEEEEE;
}

.gr1d-version-status {
  display: flex;
  padding-top: 10px;
  align-items: center;
}

.gr1d-version-status h4 {
  font-weight: normal;
  font-size: 14px;
  flex: 1;
  color: #212121;
  text-decoration: none;
}

.gr1d-version-status h5 {
  font-weight: normal;
  font-size: 14px;
  color: #212121;
}

a:-webkit-any-link {
  text-decoration: none;
}
</style>
