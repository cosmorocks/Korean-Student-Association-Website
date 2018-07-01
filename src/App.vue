<template>
  <div id="app">
    <!-- MAIN CONTAINER OF SITE -->
    <div class="container main-div">
      <!-- NAVBAR OF SITE -->
      <nav class="navbar navbar-default navbar-expand-lg navbar-light">
          <router-link class="nav-link navbar-brand" tag="a" to="/"><img class="navbar-brand logo" src="./assets/logo.png"></router-link>
          <button class="navbar-toggler hamburgNav" type="button" data-toggle="collapse" data-target="#navContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navContent">
            <div class="navbar-nav ml-auto boxxx">
              <div class="nav-item mr-5">
                <router-link class="nav-link" tag="a" to="/about">About</router-link>
              </div>
              <div class="nav-item mr-5">
                <router-link class="nav-link" tag="a" to="/officers">Officers</router-link>
              </div>
              <div class="nav-item mr-5">
                <router-link class="nav-link" tag="a" to="/events">Events</router-link>
              </div>
              <div class="nav-item mr-5">
                <router-link class="nav-link" tag="a" to="/expo">Expo</router-link>
              </div>
            </div>
          </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
  body,html{
    margin:0;
    padding: 0;
  }
  nav{
    height: 70px;
  }

  .logo{
    padding-top: 10px;
    width: 110px;
  }
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    font-family: 'Lora', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  .nav-link{
    color: black;
    /* padding-right: 70px; */
    text-align: center;
  }
  #nav a.router-link-exact-active {
    /* color: #42b983; */
  }
  nav a:hover{
    text-decoration: none;
  }
  .hamburgNav:focus{
    outline: none;
  }
  .nav-link:focus{
    outline: none;
  }
  .main-div{
    padding: 0;
  }
  @media only screen and (max-width: 992px) {
    .boxxx{
      border: 1px solid rgba(216,216,216,0.9);
      box-shadow: 0px 5px rgba(0,0,0,0.2);
      border-radius: 15px;
      width: 150px;
      background-color: white;
    }
    .nav-item{
      margin-left: 48px;
    }
  }
</style>
