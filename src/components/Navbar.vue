<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo"
          src="https://media0.giphy.com/media/MxYQrB9jeGzza/giphy.gif?cid=ecf05e47obh8tu0gnphyp8o44m9vievjbtsuseh08vk8rhs2&rid=giphy.gif&ct=s"
          height="45" />
        <h1>MeMe Book</h1>
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">

      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
import SearchForm from "./SearchForm.vue";
export default {
  setup() {
    return {}
  },
  components: { Login, SearchForm }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
