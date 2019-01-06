<template>
    <div class="bvideoEdit">
            <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">名称：</span>
                    </div>
                    
                </el-col>
                <el-col :span="12" >
                    <el-input class="form-input"
                        placeholder="名称"
                        v-model="bvideo.title"
                        clearable>
                    </el-input>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">b站视频id</span>
                    </div>
                    
                </el-col>
                <el-col :span="12" >
                    <el-input class="form-input"
                        placeholder="b站视频id"
                        v-model="bvideo.aid"
                        clearable>
                    </el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">番剧id</span>
                    </div>
                    
                </el-col>
                <el-col :span="12" >
                    <el-input class="form-input"
                        placeholder="番剧id"
                        v-model="bvideo.bangumiId"
                        clearable>
                    </el-input>
                </el-col>
            </el-row>
           

            <el-row style = "text-align: center;">
                    <el-button type="success" style = "width: 200px;margin-top: 30px;margin-bottom: 50px;" @click="save">保存</el-button>
            </el-row>
          
    </div>
</template>
<script>
export default {
    props:{
        id:String
    },
    data() {
        return {
            bvideo:{
                title:"",
                aid:"",
                bangumiId:"",
              
            }, 
        };
    },
    computed:{
        // headers(){
        //     return {
        //         token:this.$localStorage.get("token","")
        //     }
        // }
    },
    mounted(){
        if(this.id){
            this.$http.get("bvideos/"+this.id).then(response=>{
                this.bvideo = response.body;
                
            });
        }
        
    },
    methods:{
        
        save(){
            if(this.id){
               
                this.$http.put("bvideos/"+this.id,this.bvideo).then(response=>{
                    this.$router.push("/admin/bvideo/list");
                });
            }else{
                this.$http.post("bvideos/",this.bvideo).then(response=>{
                    this.$router.push("/admin/bvideo/list");
                });
            }
            
        }
    }
}
</script>
<style scoped>
.bvideoEdit{
    background: #ffffff;
}
.el-row {
  margin-top: 10px;
}
.form-label {
  height: 45px;
  line-height: 45px;
  text-align: right;
}
.form-input {
  height: 45px;
  line-height: 45px;
}
.form-textarea textarea {
  resize: none;
}
.cast-list {
  border: 1px solid #dcdfe6;
}
.cast-item {
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 18px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #dcdfe6;
  background: #00a5bf;
  border-radius: 5px;
  margin-right: 5px;
}
.cast-item:last-child {
  border-bottom: none;
}
.cast-item i {
  position: absolute;
  right: 8px;
  top: 6px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
  
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
