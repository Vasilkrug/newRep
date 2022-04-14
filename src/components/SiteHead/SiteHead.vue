<template>
  <header class="header">
    <div class="head-item">
      <a href="mailto:username@someemail.com">username@someemail.com</a>
      <MyButton style="background: white; color:#229ED9">Выйти</MyButton>
    </div>
  </header>
</template>

<script>
import MyButton from "@/UI/MyButton/MyButton";

export default {
  name: "SiteHead",
  components: {MyButton}
}
</script>

<style scoped>
.header {
  height: 100px;
  background: #229ED9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.head-item {
  display: flex;
  margin-right: 40px;
  padding: 15px;
  align-items: center;
}

.head-item a {
  position: relative;
  margin-right: 25px;
  text-decoration: none;
  color: white;
  font-size: 18px;
}

.head-item a:hover {
  color: #FBD784;
  transition: 0.2s ease-in;
}

.head-item a::after {
  position: absolute;
  left: 0;
  bottom: -15px;
  display: block;
  content: '';
  width: 100%;
  height: 2px;
  background-color: #FBD784;
  opacity: 0;
  transition: all 0.2s ease-in;
}

.head-item a:hover::after {
  bottom: -5px;
  background-color: #FBD784;
  opacity: 1;
}


</style>