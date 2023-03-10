<template lang="pug">
header.header
  .header_nav 
    .header_logo 
       img.header_logo_img(:src="logo", alt="logo")
       h1.header_logo_text FIGMA.OS
    span.header_description CONFIG *** LIVE FROM SM ***
  .header_info
    time.header_date {{ utc }}
    img.header_icon(:src="globe")
</template>

<script setup>
import {ref} from 'vue'
import Logo from '/public/icons/figma.svg'
import Globe from '/public/icons/globe.svg'

const logo = ref(Logo)
const globe = ref(Globe)

const date = ref(new Date())
const utc = date.value.toUTCString()
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    padding: 4px 32px 11px;
    background-color: black;
    box-sizing:border-box;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    font-family: 'IBM Plex Mono';
    font-weight: 400;

    &_nav {
        display: flex;
        gap: 49px;
        align-items: center;
    }

    &_logo {
        display: flex;
        gap: 11px;
        align-items: center;

        &_text {
            margin: 0;
            font-size: 16px;
            line-height: 100%;
            font-weight: 400;
        }
    }

    &_info {
        display: flex;
        align-items: center;
        gap: 30px;
    }
}
</style>