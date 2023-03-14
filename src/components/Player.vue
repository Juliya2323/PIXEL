<template lang="pug">
tab.player
  template(v-slot:info)
    h3.player_title SONG I HEAR ALL THE TIME
  template(v-slot:icon)
    img.player_icon(:src="playIcon")
  template(v-slot:content)
    .player_content
      img.player_img(:src="songImg" alt="song image")
      .player_wrapper
        .controls
          button(@click="prevTrack") Prev
          button(@click="togglePlay") {{ isPlaying ? 'Pause' : 'Play' }}
          button(@click="nextTrack") Next
        .track-info
        h2 {{ currentTrack.title }}
        audio(ref="audioPlayer" :src="currentTrack.src" @ended="nextTrack")
</template>

<script setup>
import { reactive, toRefs, computed, onMounted, ref } from "vue";
import Tab from "../components/Tab.vue";
import PlayIcon from "/public/icons/play.svg";
import SongImg from "/public/icons/songImg.svg";

const songImg = ref(SongImg);
const playIcon = ref(PlayIcon);

const state = reactive({
  tracks: [
    { title: "Song 1", src: "/public/music/song 1.mp3" },
    { title: "Song 2", src: "/public/music/song 2.mp3" },
  ],
  currentTrackIndex: 0,
  isPlaying: false,
});

const audioPlayer = ref(null);

const currentTrack = computed(() => state.tracks[state.currentTrackIndex]);

function play() {
  state.isPlaying = true;
  audioPlayer.value.play();
}

function pause() {
  state.isPlaying = false;
  audioPlayer.value.pause();
}

function togglePlay() {
  if (state.isPlaying) {
    pause();
  } else {
    play();
  }
}

function nextTrack() {
  state.currentTrackIndex = (state.currentTrackIndex + 1) % state.tracks.length;
  if (state.isPlaying) {
    play();
  }
}

function prevTrack() {
  state.currentTrackIndex =
    (state.currentTrackIndex - 1 + state.tracks.length) % state.tracks.length;
  if (state.isPlaying) {
    play();
  }
}

onMounted(() => {
  audioPlayer.value.addEventListener("ended", nextTrack);
});

const { tracks, currentTrackIndex, isPlaying } = toRefs(state);
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
