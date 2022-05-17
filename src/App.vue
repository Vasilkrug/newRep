<template>
  <div id="app">
    <SiteHead/>
    <SideBar/>
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"/>
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import SiteHead from "@/components/SiteHead/SiteHead";
import SideBar from "@/components/Sidebar/SideBar";

export default {
  name: 'App',
  components: {
    SideBar,
    SiteHead,
  },
  mounted() {
    this.$store.commit('INITIAL_STORE')
  }
}

</script>

<style lang="scss">
</style>