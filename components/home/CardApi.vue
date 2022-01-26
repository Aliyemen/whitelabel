<template lang="pug">
  article
    .gr1d--card-api
      .gr1d--header
        img(width='80px' height='80px' v-bind:src='img' v-bind:alt='title')
        .gr1d--api-title
          h3 {{ title }}
          h4 {{ subtitle }}
      .gr1d--body
        p
          | {{ description }}
      .gr1d--footer(v-for='category in categories' :key='category')
        span.gr1d--tag {{ category }}

</template>

<script>
export default {
  name: "CardApi",
  props: ["title", "subtitle", "img", "description", "categories"],
};
</script>

<style scoped>
.gr1d--card-api {
  width: 100%;
  max-width: 395px;
  padding: 12px 16px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  min-height: 200px;
}

.gr1d--header {
  display: flex;
  gap: 12px;
}

.gr1d--api-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.gr1d--api-title h3 {
  font-weight: 500;
  font-size: 20px;
  color: #14161f;
}

.gr1d--api-title h4 {
  font-weight: 400;
  font-size: 14px;
  color: #9ea1b0;
  margin-top: 8px;
}

.gr1d--body {
  margin-top: 18px;
  min-height: 44px;
}

.gr1d--body p {
  font-weight: 400;
  font-size: 14px;
  color: #404554;
}

.gr1d--tag {
  font-weight: 400;
  font-size: 14px;
  color: #212121;
  background-color: #E0E0E0;
  border-radius: 16px;
  padding: 6px 12px;
}

.gr1d--footer{
  margin-top: 12px;

}
</style>
