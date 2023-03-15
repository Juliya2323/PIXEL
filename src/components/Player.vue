<template lang="pug">
tab.player
  template(v-slot:info)
    h3.player_title SONG I HEAR ALL THE TIME
  template(v-slot:icon)
    img.player_icon(:src="playIcon")
  template(v-slot:content)
    .player_content
      img.player_img(:src="currentTrack.img")
      .player_wrapper
        .player_song 
          .player_song_info 
            h2.player_song_title Song Name 
            .player_song_icon(@click="selectSong" :class="{ star: starIsSelected }")
              svg.player_song_icon_svg(:class="{ star: starIsSelected }" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg")
                path(d="M32 18V16H30V12H28V8H26V4H22V8H20V12H18V16H16V18H4V22H6V24H8V26H10V28H12V36H10V40H8V44H14V42H18V40H20V38H28V40H30V42H34V44H40V40H38V36H36V28H38V26H40V24H42V22H44V18H32ZM32 24V26H30V30H32V34H28V32H20V34H16V30H18V26H16V24H14V22H20V20H22V16H26V20H28V22H34V24H32Z" fill="black")
          h3.player_song_name  {{ currentTrack.title }}
        .player_controls
          button.player_button(@click="prevTrack") 
            img.player_button_img(:src="prev")
          button.player_button(@click="togglePlay") 
            img.player_button_img(:src="pauseImg")
          button.player_button(@click="nextTrack") 
            img.player_button_img(:src="next")
        audio(ref="audioPlayer" :src="currentTrack.src" @ended="nextTrack")
</template>

<script setup>
import { reactive, toRefs, computed, onMounted, ref } from "vue";
import Tab from "../components/Tab.vue";
import PlayIcon from "/public/icons/play.svg";
import Next from "/public/icons/next.svg";
import Prev from "/public/icons/prev.svg";
import PauseImg from "/public/icons/pause.svg";
import Star from "/public/icons/star.svg";

const playIcon = ref(PlayIcon);
const next = ref(Next);
const prev = ref(Prev);
const pauseImg = ref(PauseImg);
const star = ref(Star);
const starIsSelected = ref(false);

const state = reactive({
  tracks: [
    {
      title: "Inspire",
      src: "/public/music/song 1.mp3",
      img: "/public/images/inspire.jpg",
    },
    {
      title: "Dreams",
      src: "/public/music/song 2.mp3",
      img: "/public/images/dreams.jpg",
    },
    {
      title: "Ukulele",
      src: "/public/music/song 3.mp3",
      img: "/public/images/ukulele.jpg",
    },
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

function selectSong() {
  starIsSelected.value = !starIsSelected.value;
  console.log(starIsSelected.value);
}
</script>

<style scoped lang="scss">
.player {
  position: absolute;
  width: 400px;
  height: 150px;
  top: 194px;
  right: 138px;
  font-weight: 600;
  font-size: 16px;

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
    padding: 44px 15px 18px;
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  &_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &_img {
    width: 87px;
    height: 87px;
    border-radius: 100px;
    object-fit: cover;
    border: 3px solid black;
  }

  &_button {
    border: 1px solid transparent;
    background-color: transparent;
    cursor: pointer;
    padding: 0;

    &_img {
      width: 32px;
      height: 32px;
    }
  }

  &_song {
    display: flex;
    flex-direction: column;

    &_info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &_title {
      margin: 0;
      font-weight: 600;
      padding-left: 4px;
      font-size: 18px;
      line-height: 100%;
    }

    &_name {
      margin: 0;
      font-weight: 400;
      font-size: 16px;
      padding-left: 4px;
      line-height: 100%;
    }

    &_icon {
      width: 30px;
      height: 30px;
      cursor: pointer;

      &_svg {
        width: 30px;
        height: 30px;
      }

      path {
        transition: all 0.3s ease-out;
      }

      &:hover {
        path {
          stroke: var(--red);
        }
      }
    }
  }
}

.star {
  path {
    fill: var(--red);
  }
}
</style>
