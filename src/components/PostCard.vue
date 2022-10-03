<template>
  <div class="post-card">
    <div class="col-md-6 col-lg-auto d-flex  justify-content-center">
      <div class="card p-2 elevation-5">
        <img :src="posts.imgUrl" class="image-fluid">
        <div class="card-body">
          <h5>{{posts.body}}</h5>
          <CreatorCard :creator="posts.creator " />
          <i class="mdi mdi-delete fs-4 selectable rounded" @click.stop="$emit('deletePosts')"
            v-if="account.id == posts.creatorId"></i>
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
import ProfileCard from "./ProfileCard.vue";
import CreatorCard from "./CreatorCard.vue";

export default {
  props: {
    posts: { type: Post, required: true },

  },
  setup(props, { emit }) {
    return {
      coverImg: computed(() => `url(${props.post.coverimg})`),
      account: computed(() => AppState.account),
      deletePosts() { emit('deletePosts') }
    };
  },
  components: { ProfileCard, CreatorCard }
}
</script>


<style lang="scss" scoped>
img {
  max-width: 90rem;
  max-height: 80rem;
  object-fit: fill;
}
</style>