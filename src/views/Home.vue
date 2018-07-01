<template>
  <div class="home">
    <HeroImage></HeroImage>
    <div class="container">
      <div class="down-arrow">
        <i class="fas fa-chevron-circle-down"></i>
      </div>
    </div>
    <HomeBlockOne></HomeBlockOne>
    <HomeBlockTwo></HomeBlockTwo>
    <SignUpForm></SignUpForm>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeroImage from '@/components/HeroImage.vue'
import HomeBlockOne from '@/components/HomeBlockOne.vue'
import HomeBlockTwo from '@/components/HomeBlockTwo.vue'
import SignUpForm from '@/components/SignUpForm.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'home',
  components: {
    HeroImage,
    HomeBlockOne,
    HomeBlockTwo,
    SignUpForm,
    Footer
  }
}
</script>

<style scoped>
  .home{
    height: fit-content;
  }
  .down-arrow{
    font-size: 40px;
    text-align: center;
    margin-top: 25px;
  }

</style>