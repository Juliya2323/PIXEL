<template lang="pug">
.projects
  img.projects_img(:src="projectsFolder", alt="projects folder")
  h2.projects_title Projects
</template>

<script setup>
import { ref } from "vue";
import Projects from "/public/icons/pinkFolder.svg";

const projectsFolder = ref(Projects);
</script>

<style scoped lang="scss">
.projects {
  position: absolute;
  top: 600px;
  right: 255px;
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
