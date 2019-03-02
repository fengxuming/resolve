<template>
    <div class="bangumiList" style="height:100%">
        <el-row>
            <el-col :span="24">
                <div class="option">
                    <el-button type="success" @click="addBangumi()">添加番剧</el-button>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-form :inline="true"  class="demo-form-inline">
                <el-form-item label="番剧名">
                    <el-input v-model="title" placeholder="番剧名"></el-input>
                </el-form-item>
                <el-form-item label="放松日期">
                   <el-select v-model="startDate" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="searchBangumiList()">查询</el-button>
                </el-form-item>
            </el-form>


             
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
                    >
                </el-table-column>
                <el-table-column
                   
                    prop="title"
                    label="番剧名">
                </el-table-column>
                <el-table-column
                    prop="cover.path"
                    label="封面"
                    width="200">
                    <template slot-scope="scope">
                        <img style="width:100%" :src="scope.row.cover.path | imgUrlFilter"></img>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="weekDay"
                    label="星期">
                    <template slot-scope="scope">
                        <span>{{scope.row.weekDay | weekDayFilter}}</span>
                    </template>
                </el-table-column>
                 <el-table-column
                    prop="startDate"
                    label="播放日期">
                    
                </el-table-column>
                
                <el-table-column
                    
                    label="操作">
                    <template slot-scope="scope">
                        <el-button  type="text" size="small" @click="viewClick(scope.row)">查看</el-button>
                        <el-button type="text" size="small" @click="editClick(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination
                @current-change="handleCurrentChange"
                :page-size="20"
                layout="prev, pager, next, jumper"
                :total='totalRecords'>
            </el-pagination>
        </div>
        
    </div>
   
</template>
<script>
export default {
    data(){
        return {
            //查询参数
            searchParams:{
                offset:0,
                maxSize:20,
                startDate:"2019-1",
            },
            title:"",
            startDate:"2019-1",
            totalRecords:0,
            bangumiList:[],
            options: [{
                value: '2018-10',
                label: '2018秋季'
            }, {
                value: '2019-1',
                label: '2019春季'
            }],
        }
    },
    watch:{
        startDate(newDate){
            this.searchParams.startDate = newDate
        },
        title(newTitle){
            this.searchParams.title = newTitle
        }
    },
    methods:{
        searchBangumiList(){
            this.$http.get("bangumis",{
                params:this.searchParams
            }).then(response =>{
                this.bangumiList = response.body.datas;
                this.totalRecords = response.body.totalRecords;
            });
        },
        handleCurrentChange(value){
            this.searchParams.offset = (value-1)*this.searchParams.maxSize;
            this.searchBangumiList();
        },
        viewClick(bangumi) {
           
            this.$router.push("/admin/bangumi/view/"+bangumi._id);
        },
        editClick(bangumi) {
            console.log(bangumi);
            this.$router.push("/admin/bangumi/edit/"+bangumi._id);
        },
        addBangumi(){
            this.$router.push("/admin/bangumi/edit/");
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
            return process.env.VUE_APP_HTTP_ROOT+path;
        }
    },
    mounted(){
        this.searchBangumiList();
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
    .page{
        text-align: right;
    }
</style>
