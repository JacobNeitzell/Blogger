<template>
  <div class="component">
    <div class="form-floating mb-3">
      <input type="imageUrl" class="form-control" id="floatingImgUrl" placeholder="Image Url">
      <label for="floatingimageurl"></label>
    </div>
    <div class="form-floating">
      <input type="body" class="form-control" id="floatingbody" placeholder="Thoughts?">
      <label for="floatingbody"></label>
    </div>

  </div>
</template>


<script>
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({
      body: {},
      imgUrl: {}
    })
    return {
      editable,
      async handleSubmit() {
        try {

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