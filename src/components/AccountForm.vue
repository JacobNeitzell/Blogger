<template>
  <div class="component">
    <form class="card account-form" @submit.prevent="handleSubmit">
      <div class="card-body text-start">
        <div>
          <label for="name">Name:</label>
          <input type="text" class="form-control" v-model="editable.name" required name="name">
        </div>
        <div>
          <label for="picture">Picture:</label>
          <input type="url" class="form-control" v-model="editable.picture" required name="picture"
            placeholder="picture">
        </div>
        <div>
          <label for="coverImg">Cover Image:</label>
          <input type="url" class="form-control" v-model="editable.coverImg" required name="coverImg">
        </div>
        <div>
          <label for="github">Github</label>
          <input type="url" class="form-control" v-model="editable.github" name="Github">
        </div>

        <div>
          <label for="linkedin">LinkedIn</label>
          <input type="url" class="form-control" v-model="editable.linkedin" name="linkedIn">
        </div>
        <div>
          <label for="linkedin">Graduate?</label>
          <input type="url" class="form-control" v-model="editable.graduated" name="linkedIn">
        </div>
        <div>
          <label for="linkedin">Resume</label>
          <input type="url" class="form-control" v-model="editable.resume" name="linkedIn">
        </div>
        <div>
          <label for="linkedin">Class</label>
          <input type="url" class="form-control" v-model="editable.class" name="linkedIn">
        </div>
        <div>
          <label for="bio">Bio:</label>
          <textarea type="text" class="form-control" v-model="editable.bio" name="bio" rows="8"
            style="resize:none"></textarea>
        </div>
        <div>
          <button type="submit" class="btn btn-primary w-100 mt-2">Save</button>
        </div>
      </div>
    </form>

  </div>
</template>


<script>
import { ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { accountService } from "../services/AccountService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {

    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...AppState.account }
    })

    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          Pop.error(error, '[EditAccount]')
        }
      }


    }
  }
}
</script>


<style lang="scss" scoped>

</style>  