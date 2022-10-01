<template>
  <div class="Ad-card">

    <div class="bg-dark text-light sidebar">
      <img :src="jads.square" :alt="jads.title" :class="image-fluid">
    </div>

  </div>



  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="adsCanvas"
    aria-labelledby="adsCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="adsCanvasLabel"><img src="" alt=""></h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">

    </div>
  </div>


</template>


<script>
import { onMounted } from "vue";
import { Jad } from "../models/Jad.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    jads: { type: Jad, required: true }
  },




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


    return {}
  }
}
</script>


<style lang="scss" scoped>
img {
  max-width: 35rem;
  max-height: 20rem;
}
</style>