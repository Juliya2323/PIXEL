<template lang="pug">
.draggable(:style="{ left: x + 'px', top: y + 'px' }" @mousedown="startDrag")
  slot
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {};
  },
  setup() {
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

    return {
      x,
      y,
      startDrag,
      handleDrag,
      stopDrag,
    };
  },

  mounted() {
    document.addEventListener("mousemove", this.handleDrag);
    document.addEventListener("mouseup", this.stopDrag);
  },

  beforeUnmount() {
    document.removeEventListener("mousemove", this.handleDrag);
    document.removeEventListener("mouseup", this.stopDrag);
  },
};
</script>

<style lang="scss">
.draggable {
  position: absolute;
  cursor: move;
}
</style>
