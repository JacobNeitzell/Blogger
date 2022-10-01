<template>
  <div class="jad-card">

    <div class="bg-dark text-light sidebar ">
      <img :src="jads.tall" :alt="jads.title">
    </div>

  </div>



  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="jadsCanvas"
    aria-labelledby="jadsCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="jadsCanvasLabel"><img :src="jads.tall" :alt="jads.title"></h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">

    </div>
  </div>


</template>


<script>
import { Jad } from "../models/Jad.js";
export default {
  props: {
    jads: { type: Jad, required: true }
  },




  setup() {


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