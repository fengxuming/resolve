<template>
    <div class="crawlerSettingEdit">
            <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">番剧关键词：</span>
                    </div>
                    
                </el-col>
                <el-col :span="12" >
                    <el-input class="form-input"
                        placeholder="番剧关键词"
                        v-model="crawlerSetting.bangumiName"
                        clearable>
                    </el-input>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">字幕组：</span>
                    </div>
                    
                </el-col>
                <el-col :span="12" >
                    <el-input class="form-input"
                        placeholder="请输入字幕组"
                        v-model="crawlerSetting.zimuzu"
                        clearable>
                    </el-input>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">抓取间隔时间：</span>
                    </div>
                    
                </el-col>
                <el-col :span="12" >
                    <el-input class="form-input"
                        placeholder="请输入抓取间隔时间"
                        v-model="crawlerSetting.intervalTime"
                        clearable>
                    </el-input>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">番剧ID：</span>
                    </div>
                    
                </el-col>
                <el-col :span="12" >
                    <el-input class="form-input"
                        placeholder="请输入番剧ID"
                        v-model="crawlerSetting.bangumi"
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
            crawlerSetting:{
                bangumiName:"",
                zimuzu:"",
                intervalTime:"",
                bangumi:""
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
            this.$http.get("crawlerSettings/"+this.id).then(response=>{
                this.crawlerSetting = response.body;
                
            });
        }
        
    },
    methods:{
        
        save(){
            if(this.id){
               
                this.$http.put("crawlerSettings/"+this.id,this.crawlerSetting).then(response=>{
                    this.$router.push("/admin/crawlerSetting/list");
                });
            }else{
                this.$http.post("crawlerSettings/",this.crawlerSetting).then(response=>{
                    this.$router.push("/admin/crawlerSetting/list");
                });
            }
            
        }
    }
}
</script>
<style scoped>
.crawlerSettingEdit{
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
