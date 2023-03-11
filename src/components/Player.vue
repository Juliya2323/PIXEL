<template lang="pug">
tab.player
  template(v-slot:info)
    h3.player_title SONG I HEAR ALL THE TIME
  template(v-slot:icon)
    img.player_icon(:src="play")
  template(v-slot:content)
    .player_content
      img.player_img(:src="songImg" alt="song image")
      .player_wrapper
</template>

<script setup>
import {ref} from 'vue'
import Tab from "../components/Tab.vue";
import Play from '/public/icons/play.svg';
import SongImg from '/public/icons/songImg.svg'

const play = ref(Play)
const songImg = ref(SongImg)
</script>

<style scoped lang="scss">
.player {
  position: absolute;
  width: 400px;
  height: 150px;
  top: 194px;
  right: 138px;

  &_title {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }

  &_icon {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  &_content {
    height: 100%;
    background-color: var(--grey);
    box-sizing: border-box;
    padding: 47px 15px 18px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  &_wrapper {
    
  }
}
</style>