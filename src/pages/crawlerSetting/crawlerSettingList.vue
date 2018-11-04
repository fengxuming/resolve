<template>
    <div class="crawlerSettingList" style="height:100%">
        <el-row>
            <el-col :span="24">
                <div class="option">
                    <el-button type="success" @click="addCrawlerSetting()">添加爬虫配置</el-button>
                </div>
            </el-col>
        </el-row>
        <el-table
                :data="crawlerSettingList"
                stripe
                border
                height="80%"
                style="width: 100%">
                <el-table-column
                    prop="_id"
                    label="ID">
                </el-table-column>
                <el-table-column
                    prop="bangumiName"
                    label="番剧关键词">
                </el-table-column>
                <el-table-column
                    prop="zimuzu"
                    label="字幕组">
                </el-table-column>
                <el-table-column
                    prop="intervalTime"
                    label="抓取间隔时间">
                </el-table-column>
                <el-table-column
                    prop="bangumi"
                    label="番剧">
                </el-table-column>
                
                <el-table-column
                    label="操作">
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
            crawlerSettingList:[]
        }
    },
    methods:{
        viewClick(crawlerSetting) {
            
            this.$router.push("/admin/crawlerSetting/view/"+crawlerSetting._id);
        },
        editClick(crawlerSetting) {
            
            this.$router.push("/admin/crawlerSetting/edit/"+crawlerSetting._id);
        },
        addCrawlerSetting(){
            this.$router.push("/admin/crawlerSetting/edit/");
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
        this.$http.get("crawlerSettings").then(response =>{
            this.crawlerSettingList = response.body;
        })
    }
    
}
</script>
<style scoped>
    .crawlerSetting{
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
