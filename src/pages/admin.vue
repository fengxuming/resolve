<template>
    <div class="admin">
        <top-nav></top-nav>
        <el-aside width="200px">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                    <router-link to="/admin/list">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">番剧</span>
                        </el-menu-item>
                    </router-link>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">种子</span>
                    </el-menu-item>
                    
            </el-menu>
        </el-aside>
       <el-main style="right:0;">
           <router-view></router-view>
           <!-- <bangumi-edit></bangumi-edit> -->
           <!-- <bangumi-list></bangumi-list> -->
       </el-main>
        
    </div>
    
</template>
<script>
import BangumiList from "./bangumiList";
import BangumiEdit from "./bangumiEdit";
import TopNav from "../components/topNav";
export default {
  data() {
    return {
      
    };
  },
  components: {
    TopNav,
    BangumiEdit,
    BangumiList
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    
  }
};
</script>
<style scoped>
.el-main{
    margin: 0;
    padding: 0;
    background: #ffffff;
    border-top: 1px solid #e6e6e6;
    right: 0;
}
.admin {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
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
.tac {
  margin-top: 10px;
  height: 100%;
}
.el-menu {
  height: 100%;
}
.el-aside {
  height: calc(100% - 60px);
}
.el-main {
  position: absolute;
  left: 200px;
  right: 10px;

  top: 60px;
  height: calc(100% - 60px);
}
a{
    text-decoration: none;
    color: unset;
}

</style>


