<template lang="pug">
tab.bio
    template(v-slot:info)
      h3.bio_title BIO.DMG
    template(v-slot:icon)
      img.bio_img(:src='account')
    template(v-slot:content)
      .bio_content
        .bio_main 
          .bio_photo 
            img.bio_img
          .bio_info
        .bio_additional
</template>

<script setup>
import { ref } from "vue";
import Tab from "../components/Tab.vue";
import Account from "/public/icons/acc.svg";

const account = ref(Account);
</script>

<style scoped lang="scss">
.bio {
  width: 400px;
  height: 250px;
  top: 400px;
  left: 500px;

  &_title {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
  }

  &_img {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  &_content {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
  }

  &_main {
    height: 75%;
    margin-top: 27px;
  }

  &_additional {
    height: 25%;
    background: repeating-linear-gradient(
      transparent,transparent 30px, grey 32px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,transparent 30px, grey 32px
    );
    border-top: 1px solid black;
  }
}
</style>
