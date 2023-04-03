<template lang="pug">
.music 
  img.music_img(:src="Music", alt="music folder" draggable="false")
  h2.music_title Music
</template>

<script setup>
import { ref } from "vue";
import Music from "/icons/redFolder.svg";
</script>

<style scoped lang="scss">
.music {
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
