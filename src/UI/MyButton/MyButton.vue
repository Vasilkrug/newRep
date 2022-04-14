<template>
<button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.button {
  width: 130px;
  height: 40px;
  background: #229ED9;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)
}
</style>