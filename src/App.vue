<template>
  <header>
    <Navbar />
  </header>

  <main class="container-fluid">
    <div class="row">
      <div class="col-md-4  float-md-start d-none d-md-block bg-dark text-light sidebar">
        <Login />
        <button class="btn" data-bs-target="#loginCanvas" data-bs-toggle="offcanvas">
          <span class="text-success lighten-30 selectable text-uppercase">
          </span>
        </button>
        <span class="text-success lighten-30 text-uppercase">Name
        </span>
        <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
          <button class="btn" data-bs-target="#loginCanvas" data-bs-toggle="offcanvas">
            <span class="text-success lighten-30 selectable text-uppercase">Links
            </span>
          </button>
        </div>
        <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
          <button class="btn" data-bs-target="#loginCanvas" data-bs-toggle="offcanvas">
            <span class="text-success lighten-30 selectable text-uppercase">Links
            </span>
          </button>
        </div>
        <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
          <button class="btn" data-bs-target="#loginCanvas" data-bs-toggle="offcanvas">
            <span class="text-success lighten-30 selectable text-uppercase">Links
            </span>
          </button>
        </div>
      </div>
      <div class="col-md-10 main-content">

      </div>
    </div>
    <div class="col-md-3 float-md-end mb-3 ms-md-3">
      <JadCard v-for="j in jads" :key="j.id" :jads="j" />
    </div>

    <router-view />
  </main>



  <!-- TODO make sure to duplicate for ads on the other side  -->
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="LoginCanvas"
    aria-labelledby="LoginCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="LoginCanvasLabel">Listing/pictures/name</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
    </div>
  </div>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made by JakeWorks 🤪😦🤑
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Login from "./components/Login.vue"
import JadCard from "./components/JadCard.vue"
import { Jad } from "./models/Jad.js"

export default {
  setup() {
    return {
      appState: computed(() => AppState),
      jads: computed(() => AppState.jads)
    }
  },
  components: { Navbar, Login, JadCard }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
