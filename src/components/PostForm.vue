<template>

  <form @submit.prevent="handleSubmit" class="card col-6 d-flex align-items-center posts-form">
    <div class="component text-center">
      <h1 class="text-shadow title">Enter Post Here</h1>
      <div class="form mb-3">
        <label for="imgUrl">Image Here:</label>
        <input type="url" class="form-control" v-model="editable.imgUrl" required :name="imgUrl">
      </div>
      <div>
        <label for="body">Body:</label>
        <textarea type="text" class="form-control" v-model="editable.body" :name="body" rows="8"
          style="resize:none"></textarea>
      </div>
      <button class="btn btn-dark ">Submit</button>
    </div>
  </form>


</template>


<script>
import { ref } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({
      body: "",
      imgUrl: ""
    })

    return {
      editable,





      async handleSubmit() {
        try {
          const formData = editable.value
          await postsService.createPosts(formData)
          editable.value = {
            body: {},
            imgurl: {},
          }
        } catch (error) {
          Pop.error(error, '[SubmittingForm]')
        }
      }


    }
  }
}
</script>


<style lang="scss" scoped>

</style>