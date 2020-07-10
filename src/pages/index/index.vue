<template>
  <div id="app">
    首页
    <div @click="goto">跳转测试页1</div>
    <div @click="goto2">跳转测试页2</div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goto() {
      window.location.href = "/ceshi/ceshi.html";
    },
    goto2() {
      window.location.href = "/testd/testd.html";
    }
  }
};
</script>


<style>
</style>
