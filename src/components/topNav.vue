<template>
    <header class="top-nav">
          <div class="favicon">Resolve</div>
          <div class="nav-items">
            <router-link class="nav-item" to="/"><span>首页</span></router-link>
          </div>
          <div class="option-right">
            <span @click="dialogFormVisible = true" v-if="!username">登录</span>
            <span v-if="username">{{username}}</span>
            <span v-if="username" style="margin-left:10px;font-size:14px" @click="logout">退出登录</span>
          </div>

          <el-dialog title="登录" :visible.sync="dialogFormVisible">
          <el-form :model="loginForm">
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="loginForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="loginForm.password" autocomplete="off" type="password"></el-input>
            </el-form-item>
            
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="loginMethod()">登 录</el-button>
          </div>
        </el-dialog>
    </header>
</template>
<script>

export default {
    data(){
      return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        loginForm: {
          name: '',
          password: ''
        },
        formLabelWidth: '120px',
        username:"",
        token:""
      }
    },
    mounted(){
        this.username = this.$localStorage.get("username","");
        this.token = this.$localStorage.get("token","");
    },
    methods:{
        logout(){
          this.$localStorage.remove('token');
          this.$localStorage.remove("username");
          this.$localStorage.remove("role");
          this.username = "";
          this.token = "";
        },
       loginMethod(){
         this.$http.post("http://localhost:3000/login",{
            username:this.loginForm.name,
            password:this.loginForm.password
         }).then((response)=>{
            if(response.body.success){
                this.$localStorage.set('token', response.body.access_token);
                this.$localStorage.set("username",response.body.user.username);
                this.$localStorage.set("role",response.body.user.role);
                this.username = response.body.user.username;
                this.token = response.body.access_token;
                this.dialogFormVisible = false
                this.$route.reload();
            }else{
              this.dialogFormVisible = false
              this.$alert('用户名或密码错误', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    
                }
              });
            }
            

            
         });
       }
    }
};
</script>
<style scoped>
header {
  height: 60px;
  width: 100%;
  line-height: 60px;
  border-bottom: 1px solid #eaecef;
  background:#ffffff;
}
.favicon {
  width: 120px;
  height: 60px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  position: absolute;
}
.nav-items{
  width: 200px;
  height: 60px;
  position: absolute;
  margin-left: 120px;
  width: 500px;
}
.nav-item{
  display: inline-block;
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  text-decoration:none;
  color:#666666;
  font-size: 16px;
}
.nav-item span:hover{
  border-bottom:3px solid #12ccec;
}
.option-right{
  position: absolute;
  right: 30px;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: #666666;
  cursor: pointer;
  text-decoration:none;
}
</style>
