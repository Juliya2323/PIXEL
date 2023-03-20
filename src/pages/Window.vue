<template lang="pug">
.window
  img.window_img(:src="bg")
  the-header
  bio.bio
  player.player
  folder.music
    template(v-slot:default)
      music
  folder.articles
    template(v-slot:default)
      articles
  folder.projects
    template(v-slot:default)
      projects
  gallery.gallery
</template>

<script setup>
import { ref } from 'vue';

import TheHeader from "../layout/TheHeader.vue";
import Background from "/public/images/bg.png";
import Bio from "../components/Bio.vue";
import Player from "../components/Player.vue";
import Music from "../components/Music.vue";
import Articles from "../components/Articles.vue";
import Projects from "../components/Projects.vue";
import Gallery from '../components/Gallery.vue'
import Folder from '../components/Folder.vue'

const bg = ref(Background);

</script>

<style lang="scss">
.window {
  width: 90%;
  height: 90vh;
  background-color: white;
  margin: 0;
  border: 6px solid black;
  z-index: 5;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    background-color: black;
    bottom: -14px;
    left: 0;
  }

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: black;
    bottom: -14px;
    right: -10px;
  }

  &_img {
    height: max-content;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: auto;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.handle {
  cursor: move;
}

.music {
  transform: translate(280%, 70%);
}

.articles {
  transform: translate(280%, 200%);
}

.projects {
  transform: translate(382%, 165%);
}

.bio {
  transform: translate(10%, 35%);
}

.player {
  transform: translate(45%, 370%);
}

.gallery {
  transform: translate(210%, 40%);
}
</style>
