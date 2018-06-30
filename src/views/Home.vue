<template>
  <div class="home">
    <HeroImage></HeroImage>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeroImage from '@/components/HeroImage.vue'
export default {
  name: 'home',
  components: {
    HeroImage
  }
}
</script>
