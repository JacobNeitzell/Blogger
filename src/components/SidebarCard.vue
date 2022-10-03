<template>
  <div class="component">
    <div class="col-md-4  float-md-start d-none d-md-block bg-dark text-light sidebar">
      <Login />
      <button class="btn" data-bs-target="#loginCanvas" data-bs-toggle="offcanvas">
        <span class="text-success lighten-30 selectable text-uppercase">
        </span>
      </button>
      <span class="text-success lighten-30 text-uppercase">
      </span>
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        <input v-modle="creator.github">
        <span class="text-success lighten-30 selectable text-uppercase">Github
        </span>

      </div>
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        <button class="btn" data-bs-target="#loginCanvas" data-bs-toggle="offcanvas">
          <span class="text-success lighten-30 selectable text-uppercase">LinkedIn
          </span>
        </button>
      </div>
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        <button class="btn" data-bs-target="#loginCanvas" data-bs-toggle="offcanvas">
          <span class="text-success lighten-30 selectable text-uppercase">Graduate
          </span>
        </button>
      </div>
    </div>

  </div>
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="LoginCanvas"
    aria-labelledby="LoginCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="LoginCanvasLabel">Listing/pictures/name</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
    </div>
  </div>
</template>


<script>
import { Account } from "../models/Account.js";
import Login from "./Login.vue";
export default {
  props: {
    account: { type: Account, required: true }
  },

  setup() {

    return {};
  },
  components: { Login }
}
</script>


<style lang="scss" scoped>

</style>