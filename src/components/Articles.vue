<template lang="pug">
.articles 
  img.articles_img(:src="articlesFolder", alt="articles folder")
  h2.articles_title Articles
</template>

<script setup>
import { ref } from "vue";
import Articles from "/public/icons/blueFolder.svg";

const articlesFolder = ref(Articles);
</script>

<style scoped lang="scss">
.articles {
  top: 500px;
  right: 100px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &_title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 110%;
  }
}
</style>
