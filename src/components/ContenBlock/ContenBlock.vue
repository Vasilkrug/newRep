<template>
  <main class="container">
    <div class="flex-content">
      <div class="content-block" v-for="item in content"
           :key="item">
        <p>{{ item.title }}</p>
      </div>
    </div>
    <SideBar/>
  </main>
</template>

<script>
import SideBar from "@/components/Sidebar/SideBar";


export default {
  name: "ContentBlock",
  components: {SideBar},
  data() {
    return {

    }
  },
  props: {
    content: Array
  }

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  flex-direction: row-reverse;

}

.flex-content {
  display: flex;
  flex-wrap: wrap;
}

.content-block {
  width: 450px;
  height: 250px;
  border: 2px solid #229ED9;
  margin: 20px;
}
</style>