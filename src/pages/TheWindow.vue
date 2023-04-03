<template lang="pug">
.window
  img.window_img(:src="Background")
  img.window_ellipse(:src="Ellipse")
  the-header
  bio.bio
  player.player
  base-folder.music
    template(v-slot:default)
      music
  base-folder.articles
    template(v-slot:default)
      articles
  base-folder.projects
    template(v-slot:default)
      projects
  gallery.gallery
</template>

<script setup>
import { onMounted, ref } from "vue";

import TheHeader from "../layout/TheHeader.vue";
import Background from "/icons/bg.svg";
import Ellipse from "/icons/ellipse.svg";
import Bio from "../components/Bio.vue";
import Player from "../components/Player.vue";
import Music from "../components/Music.vue";
import Articles from "../components/Articles.vue";
import Projects from "../components/Projects.vue";
import Gallery from "../components/Gallery.vue";
import BaseFolder from "../ui/BaseFolder.vue";
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

  &_ellipse {
    position: absolute;
    left: 70px;
    bottom: 140px;
    animation: move 3s linear infinite;

    @keyframes move {
      from {
        transform: rotate(90deg);
      }
      to {
        transform: rotate(0);
      }
    }
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
