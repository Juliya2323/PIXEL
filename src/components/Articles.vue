<template lang="pug">
.articles 
  img.articles_img(:src="Articles", alt="articles folder" draggable="false")
  h2.articles_title Articles
</template>

<script setup>
import { ref } from "vue";
import Articles from "/icons/blueFolder.svg";

</script>

<style scoped lang="scss">
.articles {
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
