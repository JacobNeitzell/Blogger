<template>
  <div class="container-fluid">
    <div class=" row">
      <PostCard v-for="p in posts" :key="p._id" :posts="p" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import PostCard from "../components/PostCard.vue";
import { postsService } from '../services/PostsService.js';
import Pop from "../utils/Pop.js";
export default {
  setup() {
    async function getPost() {
      try {
        await postsService.getPost()
      } catch (error) {
        Pop.error(error, "[GettingPosts]")
      }
    }
    onMounted(() => { getPost(); });




    return {
      posts: computed(() => AppState.posts)





    };

  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
