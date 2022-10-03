<template>

  <div class="Profile-Page container-fluid" v-if="creator">
    <div class="row">
      <ProfileCard :creator="creator" />
      <div>
        <PostCard v-for="p in posts" :key="p.id" :posts="p" />
      </div>
    </div>
  </div>
  <div v-else>
    loading.....
  </div>
</template>


<script>

import ProfileCard from "../components/ProfileCard.vue";
import CreatorCard from "../components/CreatorCard.vue";
import PostCard from "../components/PostCard.vue";
import { useRoute } from "vue-router";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import { profilesService } from "../services/ProfilesService.js";
import { computed } from "@vue/reactivity";

export default {


  setup() {
    const route = useRoute();

    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.id)
      } catch (error) {
        Pop.error(error, "[GetProfile]")
      }
    }



    async function getPostByCreatorId() {
      try {
        await postsService.getPostByCreatorId(route.params.id)
      } catch (error) {
        Pop.error(error, '[GetPostsById]')
      }
    }
    onMounted(() => {
      getPostByCreatorId()
      getProfileById()
    });
    return {
      creator: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts)
    };

  },
  components: { ProfileCard, CreatorCard, PostCard }
}
</script>


<style lang="scss" scoped>

</style>