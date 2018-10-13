<template>
    <div class="bangumiEdit">
               <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">番剧名称：</span>
                    </div>
                    
                </el-col>
                <el-col :span="12" >
                    <el-input class="form-input"
                        placeholder="请输入番剧名称"
                        v-model="bangumi.title"
                        clearable>
                    </el-input>
                </el-col>
           </el-row>
            <el-row :gutter="20">
               <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">上传封面：</span>
                    </div>
                </el-col>
  
                <el-col :span="12" >
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl"
                        name="file"
                        :headers="headers"
                        :on-success="handleSuccess">
                        <img v-if="imgUrl" :src="imgUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height: 178px;border: 1px solid #dcdfe6;"></i>
                    </el-upload>
                    
                </el-col>
           </el-row>
          

           <el-row :gutter="20">
               <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">播放日期：</span>
                    </div>
                    
                </el-col>
  
                <el-col :span="12" >
                      <el-select v-model="bangumi.weekDay" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                      </el-select>
                </el-col>
           </el-row>

           <el-row :gutter="20">
               <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">CAST：</span>
                    </div>
                    
                </el-col>
  
                <el-col :span="12" >
                   <el-row :gutter="20" style="margin-bottom: 15px;">
                       <el-col :span="18" >
                           <el-input class="form-input"
                                placeholder="请输入番剧名称"
                                v-model="cast"
                                clearable
                                 >
                            </el-input>
                       </el-col>
                       <el-col :span="6" style="text-align: right">
                           <el-button type="success" @click="addCast()">添加</el-button>
                       </el-col>
                   </el-row>
                   
                    <div class="cast-list">
                        
                        <div class="cast-item" v-for="(item,index) in bangumi.cast">
                            <span>{{item}}</span>
                            <i class="el-icon-close" @click="deleteCast(index)"></i>
                        </div>
                    </div>
                    
                    
                </el-col>
           </el-row>

           <el-row :gutter="20">
               <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">STAFF：</span>
                    </div>
                </el-col>
  
                <el-col :span="12" >
                    <el-row :gutter="20" style="margin-bottom: 15px;"> 
                        <el-col :span="18" >
                           <el-input class="form-input"
                                placeholder="请输入番剧名称"
                                v-model="staff"
                                clearable
                                 >
                            </el-input>
                       </el-col>
                       <el-col :span="6" style="text-align: right">
                           <el-button type="success" @click="addStaff()">添加</el-button>
                    </el-col>
                    </el-row>
                   
                    <div class="cast-list">
                        <div class="cast-item" v-for="(item,index) in bangumi.staff">
                            <span>{{item}}</span>
                            <i class="el-icon-close" @click="deleteStaff(index)"></i>
                        </div>
                       
                    </div>
                    
                    
                </el-col>
           </el-row>

           
          <el-row :gutter="20">
                <el-col :span="6" >
                    <div class="form-label">
                        <span class="form-label">简介：</span>
                    </div>
                    
                 </el-col>
  
                <el-col :span="12" >
                    <el-input class="form-textarea"
                        type="textarea"
                        :rows="6"
                        placeholder="请输入简介"
                        v-model="bangumi.info">
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
            bangumiName: "",
            textarea: "",
            options: [
                {
                value: 1,
                label: "星期一"
                },
                {
                value: 2,
                label: "星期二"
                },
                {
                value: 3,
                label: "星期三"
                },
                {
                value: 4,
                label: "星期四"
                },
                {
                value: 5,
                label: "星期五"
                },
                {
                value: 6,
                label: "星期六"
                },
                {
                value: 0,
                label: "星期日"
                }
            ],
            value: 1,
            bangumi:{
                title:"",
                info:"",
                cover:"",
                weekDay:0,
                cast:[],
                staff:[],
            },
            cast:"",
            staff:"",
            imgUrl:"",
            uploadUrl:process.env.VUE_APP_HTTP_ROOT+"/uploads"
        };
    },
    computed:{
        headers(){
            return {
                token:this.$localStorage.get("token","")
            }
        }
    },
    mounted(){
        if(this.id){
            this.$http.get("bangumis/"+this.id).then(response=>{
                this.bangumi = response.body;
                this.imgUrl = process.env.VUE_APP_HTTP_ROOT+this.bangumi.cover.path;
            });
        }
        
    },
    methods:{
        deleteStaff(index){
            this.bangumi.staff.splice(index,1);
        },
        deleteCast(index){
            
            this.bangumi.cast.splice(index,1);
        },
        addCast(){
            this.bangumi.cast.push(this.cast);
            this.cast = "";
        },
        addStaff(){
            this.bangumi.staff.push(this.staff);
            this.staff = "";
        },
        handleSuccess(response, file, fileList){
            this.imgUrl =process.env.VUE_APP_HTTP_ROOT+response.resource.path;
            this.bangumi.cover = response.resource._id;
        },
        save(){
            if(this.id){
                if(this.bangumi.cover._id){
                    this.bangumi.cover = this.bangumi.cover._id;
                }
                this.$http.put("bangumis/"+this.id,this.bangumi).then(response=>{
                    this.$router.push("/admin/list");
                });
            }else{
                this.$http.post("bangumis/",this.bangumi).then(response=>{
                    this.$router.push("/admin/list");
                });
            }
            
        }
    }
}
</script>
<style scoped>
.bangumiEdit{
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
