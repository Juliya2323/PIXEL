<template lang="pug">
.draggable(:style="{ left: x + 'px', top: y + 'px' }" @mousedown="startDrag")
  .tab
    header.tab_header
      slot(name='icon') 
      slot(name='info')
      button.tab_header_options 
        img.tab_header_img(:src='close')
    slot(name='content')
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Close from "/icons/close.svg";

const x = ref(0);
const y = ref(0);
let mouseX = 0;
let mouseY = 0;
let isDragging = false;

const startDrag = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  isDragging = true;
};

const handleDrag = (event) => {
  if (isDragging) {
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;
    x.value += deltaX;
    y.value += deltaY;
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
};

const stopDrag = () => {
  isDragging = false;
};

const close = Close;

onMounted(() => {
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", stopDrag);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", handleDrag);
  document.removeEventListener("mouseup", stopDrag);
});
</script>

<style lang="scss">
.tab {
  background-color: white;
  margin: 0;
  border: 6px solid black;
  position: relative;
  z-index: 20;

  &_header {
    width: 100%;
    padding: 5px 15px;
    background-color: black;
    box-sizing: border-box;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    font-family: var(--font-ibm);
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
    }
  }

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
}

.draggable {
  position: absolute;
  cursor: move;
}
</style>
