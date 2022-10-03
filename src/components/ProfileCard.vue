<template>
  <div class="profile-card">
    <div class="cover-img text-shadow col-12" :style="{backgroundImage:`url(${creator.coverImg})`}"
      data-bs-scroll="true">
      <img :src="creator.picture" alt="" height="100" class="profile-pic">
      <div class="my-2">
        <h5>{{creator.name}}
        </h5>
        <a v-if="creator.github" :href="creator.github" target="_blank">Github<i
            class="mdi mdi-github selectable"></i></a>
        <br>
        <a v-if="creator.linkedin" :href="creator.linkedin" target="_blank"><i
            class="mdi mdi-Linkedin selectable "></i>LinkedIn</a>
        <br>
        <a v-if="creator.graduated" :href="creator.graduated" target="_blank"><i
            class="mdi mdi-AccountSchool selectable"></i>Graduate</a>
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