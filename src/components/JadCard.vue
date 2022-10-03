<template>
  <div class="jad-card">
    <div class=" text-light sidebar ">
      <img :src="jads.tall" :alt="jads.title">
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