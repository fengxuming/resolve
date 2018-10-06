<template>
    <div class="bangumi-detail">
        <el-row :gutter="20">
                <el-col :span="6">
                    <box-content :title="bangumi.title"  :imgUrl="imgUrl" :cast="bangumi.cast" :staff="bangumi.staff"></box-content>
                </el-col>
                <el-col :span="16">
                    <box-content title="播放日期" :content="bangumi.weekDay | weekDayFilter"></box-content>
                    <box-content title="简介" :content="bangumi.info"></box-content>
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
        }
    },
    computed:{
        imgUrl(){
            if(this.bangumi.cover!=""){
                return "http://localhost:3000"+this.bangumi.cover.path;
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
        this.$http.get("http://localhost:3000/bangumis/"+this.id).then(response=>{
            this.bangumi = response.body;
        });
    }
}
</script>
<style>

</style>
