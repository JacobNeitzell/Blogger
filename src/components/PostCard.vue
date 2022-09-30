<template>
  <div class="post-card">
    <div class="col-md-6 col-lg-auto d-flex  justify-content-center">
      <div class="card p-2 elevation-5">
        <img :src="posts.imgUrl" class="image-fluid">
        <div class="card-body">
          <h5>{{posts.body}}</h5>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";

export default {
  props: {
    posts: { type: Post, required: true },
  },




  setup() {
    return {
      // account: computed(() => AppState.account),
      // post: computed(() => AppState.posts)
    }
  }
}
</script>


<style lang="scss" scoped>
img {
  max-width: fit-content;
  max-height: fit-content;
  object-fit: fill;
}
</style>