<template>
  <div>
    <img
      :src="src"
      :alt="alt"
      class="zoomable"
      @click="openModal"
    />

    <div
      v-if="isModalOpen"
      class="zoom-modal"
      @click="closeModal"
    >
      <img :src="src" :alt="alt" class="zoomed-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZoomableImage",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
.zoomable {
  cursor: zoom-in;
  transition: transform 0.2s ease;
  max-width: 100%;
  height: auto;
}

.zoomable:hover {
  transform: scale(1.05);
}

.zoom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
}

.zoomed-img {
  max-width: 90%;
  max-height: 80%;
  box-shadow: 0 0 20px white;
}
</style>
