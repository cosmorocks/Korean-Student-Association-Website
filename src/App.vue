<template>
  <div id="app">
    <nav class="nav justify-content-end">
        <router-link class="nav-link" tag="a" to="/">Home</router-link>
        <router-link class="nav-link" tag="a" to="/about">About</router-link>
        <router-link class="nav-link" tag="a" to="/officers">Officers</router-link>
        <router-link class="nav-link" tag="a" to="/events">Events</router-link>
        <router-link class="nav-link" tag="a" to="/expo">Expo</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  nav{
    height: 70px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .nav-link{
    margin:10px 20px 0 0;
  }
  nav a:hover{
    text-decoration: none;
  }
  .meep{
    border: 1px solid red;
  }
</style>
