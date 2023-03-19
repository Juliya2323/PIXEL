<template lang="pug">
.music 
  img.music_img(:src="musicFolder", alt="music folder")
  h2.music_title Music
</template>

<script setup>
import { ref } from "vue";
import Music from "/public/icons/redFolder.svg";

const musicFolder = ref(Music);
</script>

<style scoped lang="scss">
.music {
  top: 400px;
  right: 350px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  &_title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 110%;
  }
}
</style>
