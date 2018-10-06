<template>
    <div class="bangumiList" style="height:100%">
        <el-row>
            <el-col :span="24">
                <div class="option">
                    <el-button type="success" @click="addBangumi()">添加番剧</el-button>
                </div>
            </el-col>
        </el-row>
        <el-table
                :data="bangumiList"
                stripe
                border
                height="80%"
                style="width: 100%">
                <el-table-column
                    prop="_id"
                    label="ID"
                    width="120">
                </el-table-column>
                <el-table-column
                   
                    prop="title"
                    label="番剧名"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="cover.path"
                    label="封面"
                    width="120">
                    <template slot-scope="scope">
                        <img style="width:100%" :src="scope.row.cover.path | imgUrlFilter"></img>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="weekDay"
                    label="星期"
                    width="120">
                    <template slot-scope="scope">
                        <span>{{scope.row.weekDay | weekDayFilter}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="cast"
                    label="声优表"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="staff"
                    label="staff表"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="info"
                    label="简介"
                    width="300">
                </el-table-column>
                
                <el-table-column
                    
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button  type="text" size="small" @click="viewClick(scope.row)">查看</el-button>
                        <el-button type="text" size="small" @click="editClick(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
        </el-table>
    </div>
   
</template>
<script>
export default {
    data(){
        return {
            bangumiList:[]
        }
    },
    methods:{
        viewClick(bangumi) {
            console.log(bangumi);
            this.$router.push("/admin/view/"+bangumi._id);
        },
        editClick(bangumi) {
            console.log(bangumi);
            this.$router.push("/admin/edit/"+bangumi._id);
        },
        addBangumi(){
            this.$router.push("/admin/edit/");
        }
    },
    filters:{
        weekDayFilter(weekDay){
            switch(weekDay){
                case 0:{
                    return "星期日"
                }
                case 1:{
                    return "星期一"
                }
                case 2:{
                    return "星期二"
                }
                case 3:{
                    return "星期三"
                }
                case 4:{
                    return "星期四"
                }
                case 5:{
                    return "星期五"
                }
                case 6:{
                    return "星期六"
                }
                
            }
        },
        imgUrlFilter(path){
            return "http://localhost:3000"+path;
        }
    },
    mounted(){
        this.$http.get("http://localhost:3000/bangumis").then(response =>{
            this.bangumiList = response.body;
        })
    }
    
}
</script>
<style scoped>
    .bangumiList{
        height: 100%;
        width: 90%;
        margin-left: 5%;
        margin-top: 30px;
    }
    .option{
        text-align: right;
        margin-bottom: 20px;
    }
</style>
