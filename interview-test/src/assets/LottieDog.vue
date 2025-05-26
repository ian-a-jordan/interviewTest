<template>
  <div ref="lottieContainer" class="logo" style="width: 350px; height: 350px;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';
import dogAnimation from './dog_animation.json'; 

const lottieContainer = ref(null);

onMounted(() => {
  lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: dogAnimation, 
  });
});
</script>

<style scoped>
.logo {
  margin: auto;
}
</style>
