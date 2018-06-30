<template>
  <div class="home">
    <HeroImage></HeroImage>
    <div class="container">
      <div class="down-arrow">
        <i class="fas fa-chevron-circle-down"></i>
      </div>
    </div>
    <HomeBlockOne></HomeBlockOne>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeroImage from '@/components/HeroImage.vue'
import HomeBlockOne from '@/components/HomeBlockOne.vue'
export default {
  name: 'home',
  components: {
    HeroImage,
    HomeBlockOne
  }
}
</script>

<style scoped>
  .home{
    height: 2000px;
  }
  .down-arrow{
    font-size: 40px;
    text-align: center;
    margin-top: 25px;
  }
</style>