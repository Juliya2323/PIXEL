<template lang="pug">
.tab    
  header.tab_header
    button.tab_header_options 
      img.tab_header_img(:src='options')
    slot(name='info')
    slot(name='icon') 
  slot(name='content')
</template>

<script setup>
import {ref} from 'vue'
import Options from '/public/icons/options.svg'
const options = ref(Options)
</script>

<style lang="scss">
.tab {
    background-color: white;
    margin: 0;
    border: 6px solid black;
    position: relative;

    &_header {
    width: 100%;
    padding: 5px 15px;
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
    z-index: 5;

         &_options {
            padding: 0;
            background-color: transparent;
            border: 1px solid transparent;
            cursor: pointer;
         }

         &_img {
            height: 14px;
            width: 58px;
         }
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 10px;
        background-color: black;
        bottom: -14px;
        left: 0;
    }

    &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 100%;
        background-color: black;
        bottom: -14px;
        right: -10px;
    }
}
</style>