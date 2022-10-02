<template>
  <header>
    <Navbar />
  </header>

  <main class="container-fluid">
    <div class="row">
      <SidebarCard />
      <div class="col-md-10 main-content">

      </div>
    </div>
    <div class="jad-card col-md-3 float-md-end mb-3 ms-md-3">
      <JadCard v-for="j in jads" :key="j.title" :jads="j" />
    </div>

    <router-view />
  </main>



  <!-- TODO make sure to duplicate for jads on the other side  -->
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made by JakeWorks 🤪😦🤑
    </div>
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Login from "./components/Login.vue"
import JadCard from "./components/JadCard.vue"
import { jadsService } from "./services/JadsService.js"
import SidebarCard from "./components/SidebarCard.vue"


export default {
  setup() {
    async function getJads() {
      try {
        await jadsService.getJads()
      } catch (error) {
        Pop.error(error, '[GettingJads]')
      }
    }

    onMounted(() => {
      getJads()
    })
    return {
      appState: computed(() => AppState),
      jads: computed(() => AppState.jads)
    }
  },
  components: { Navbar, Login, JadCard, SidebarCard }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.jad-card {
  position: absolute;
  position: sticky;
}
</style>
