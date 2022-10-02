<template>
  <div class="profile-card">
    <div class="cover-img text-shadow" :style="{backgroundImage:`url(${creator.coverImg})`}">

      <img :src="creator.picture" alt="" height="120">
      <div class="my-5">
        <h3>{{creator.name}}


          <a v-if="creator.github" :href="creator.github" target="_blank"><i class="mdi mdi-mdiGithub "></i></a>
          <a v-if="creator.graduated" :href="creator.graduated" target="_blank"><i class="mdi mdiAccountSchool"></i></a>
          <a v-if="creator.linkedin" :href="creator.linkedin" target="_blank"><i class="mdi mdiLinkedin "></i></a>


        </h3>
        <p>{{creator.bio}}</p>

      </div>

    </div>
  </div>
</template>


<script>
import { Account } from "../models/Account.js";

export default {
  props: {
    creator: {
      type: Account,
      required: true
    }
  },


  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px black, 0px 0px 5px salmon;
  font-weight: bold;
  letter-spacing: 0.08rem
}

.cover-img {
  height: 50vh;
  padding: 3rem;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>