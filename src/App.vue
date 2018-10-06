<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
html,body {
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;;
}
#app {
  font-family: "Microsoft YaHei" ! important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  width: 100%;
 
  font-size: 14px;
 
}
</style>
