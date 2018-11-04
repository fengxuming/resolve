<template>
    <div class="bangumi-detail">
        <el-row :gutter="24">
                <el-col :span="6">
                    <box-content :title="bangumi.title"  :imgUrl="imgUrl" :cast="bangumi.cast" :staff="bangumi.staff"></box-content>
                </el-col>
                <el-col :span="18">
                    <box-content title="播放日期" :content="bangumi.weekDay | weekDayFilter"></box-content>
                    <box-content title="简介" :content="bangumi.info"></box-content>
                    <box-content title="种子列表">
                        <el-table
                            :data="torrentList"
                            stripe
                            border
                            height="400"
                            :show-header=false
                            style="width: 100%">
                            <el-table-column
                                label="名称"
                                >
                                <template slot-scope="scope">
                                    <a :href="url+scope.row.path">{{ scope.row.title }}</a>
                                </template>
                            </el-table-column>
                            
                            
                        </el-table>
                    </box-content>
                </el-col>
        </el-row>
    </div>
</template>
<script>
import BoxContent from "../components/boxContent";
export default {
    data(){
        return {
            bangumi:{
                title:"",
                info:"",
                cover:"",
                weekDay:0,
                cast:[],
                staff:[],
            },
            url:process.env.VUE_APP_HTTP_ROOT,
            torrentList:[]
        }
    },
    computed:{
        imgUrl(){
            if(this.bangumi.cover!=""){
                return process.env.VUE_APP_HTTP_ROOT+this.bangumi.cover.path;
            }else{
                return "";
            }
            
        }
    },
    components: {
        BoxContent
    },
    props:{
        id:String
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
        }
    },
    mounted(){
        this.$http.get("bangumis/"+this.id).then(response=>{
            this.bangumi = response.body;
        });

        this.$http.get("torrents",{
            params:{
                bangumiId:this.id
            }
        }).then((response)=>{
            this.torrentList = response.body;
        })
    }
}
</script>
<style >
    a{
        text-decoration: none;
        color: #666666;
    }
</style>

