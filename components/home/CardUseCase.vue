<template lang="pug">
  article
    .gr1d--card-user-case
      .gr1d--header
        img(v-bind:src='img' v-bind:alt='title')
      .gr1d--body
        .gr1d--api-title
          h3 {{ title }}
          h4 {{ subtitle }}
        p
          | {{ description }}
        .gr1d--footer
          span.gr1d--tag {{ apis }} apis
        
</template>

<script>
export default {
  name: "CardUseCase",
  props: ["title", "subtitle", "img", "description", "apis"],
};
</script>

<style scoped>
.gr1d--card-user-case {
  width: 100%;
  max-width: 395px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.gr1d--header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3ebfa;
  height: 240px;
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
}

.gr1d--body {
  padding: 16px;
}

.gr1d--body p {
  font-weight: 400;
  font-size: 14px;
  color: #404554;
}

.gr1d--tag {
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  background-color: #ededed;
  border-radius: 16px;
  padding: 6px 12px;
}
</style>
