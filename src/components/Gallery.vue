<template lang="pug">
tab.gallery
  template(v-slot:info)
    h3.gallery_title KOREAN.BBQ
  template(v-slot:icon)
    img.gallery_icon(:src="Gallery" alt="gallery icon" draggable="false")
  template(v-slot:content)
    .gallery_content
</template>

<script setup>
import {ref} from 'vue'
import Tab from '../components/Tab.vue'
import Gallery from '/icons/gallery.svg'
</script>

<style scoped lang="scss">
.gallery {
  width: 480px;
  height: 280px;
  bottom: 20px;
  left: 385px;
  z-index: 5;

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
    background-image: url('/public/icons/bg2.svg');
    height: 300px;
    padding-top: 27px;
    box-sizing: border-box;
  }
  
}
</style>
