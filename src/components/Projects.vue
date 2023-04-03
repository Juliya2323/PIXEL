<template lang="pug">
.projects
  img.projects_img(:src="Projects", alt="projects folder" draggable="false")
  h2.projects_title Projects
</template>

<script setup>
import { ref } from "vue";
import Projects from "/icons/pinkFolder.svg";
</script>

<style scoped lang="scss">
.projects {
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
