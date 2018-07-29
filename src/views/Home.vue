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
    <!-- <SignUpForm></SignUpForm> -->
            <form class="submit-form form-bg" method="POST" name="contact-form">
            <input type="hidden" name="contact-form" value="contact-form" />  
            <label class="form-label">First name</label>
            <input class="name-form first-name" name="first-name" type="text" placeholder="Enter first name">
            <label class="form-label-last-name">Last name </label>
            <input class="name-form first-name" name="last-name" type="text" placeholder="Enter last name">
            <label class="form-label-email">Email</label>
            <input class="name-form" type="email" name="email" placeholder="Enter email">
            <button class="submit-button form-bg" type="submit">SUBMIT</button>
        </form>
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