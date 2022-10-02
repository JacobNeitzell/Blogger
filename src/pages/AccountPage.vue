<template>
  <div class="about text-center">
    <ProfileCard :creator="account" />

    <div class="container">
      <div class="row my-3">
        <div class="col-6 m-auto">
          <AccountForm class="elevation-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import ProfileCard from "../components/ProfileCard.vue";
import AccountForm from "../components/AccountForm.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account)

    };
  },
  components: { ProfileCard, AccountForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
