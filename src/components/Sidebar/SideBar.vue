<template>
  <div class="nav">
    <ul class="nav-list">
      <li @click="ACTIVE_PAGE($event.target.text)"
          class="nav-item"
          v-for="link in links"
          :key="link.name">
        <img :src="link.img" :alt="link.name"/>
        <router-link :to="link.url">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";

export default {
  name: "SideBar",
  methods:{
    ...mapMutations({
      ACTIVE_PAGE: 'ACTIVE_PAGE',
    })
  },
  computed:{
    ...mapState({
      links: 'links'
    })
  },
}
</script>

<style lang="scss" scoped>
</style>