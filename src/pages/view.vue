<template>
    <div class="view">
        <top-nav></top-nav>
        <div class="content">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            
               
        </div>
    </div>
</template>
<script>
import TopNav from "../components/topNav";

export default {
  components: {
    TopNav
  }
};
</script>
<style>
.view {
  width: 100%;
  height: 100%;
}
.content {
  background: #ecf0f5;
  height: 100%;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  left: 0;
  right: 0;
  overflow: hidden;
  padding-bottom: 10px;
}
.el-row{
    width: 100%;
}
body{
    background: #ecf0f5;
}
</style>


