<template>
  <div class="Creator-card">
    <router-link :to="{name: 'Profile', params:{id: creator.id}}"><img :src="creator.picture" :alt="creator.name"
        :title="creator.name">
    </router-link>

  </div>
</template>


<script>
import { Account } from "../models/Account.js";
import { Post } from "../models/Post.js";


export default {
  props: {
    creator: {
      type: Account,
      required: true
    },

  },
  setup() {

    return {}
  }
}
</script>


<style lang="scss" scoped>
img {
  height: 64px;
  width: 64px;
  object-fit: cover;
  object-position: center;
  border-radius: 2px;
}
</style>