<template>
    <div class="week" v-bind:class="weekDay | weekColorFilter">
        <div class="week-title">
            <span>{{weekDay | weekDayFilter}}</span>
        </div>
        <div class="week-content">
            <el-row :gutter="20">
                    <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="2" v-for="(item,index) in weekDayList" :key="index">
                        <box-content :title="item.title" :imgUrl="item.cover.path | imgUrlFilter" :titleLink="item._id | titleLinkFilter"></box-content>
                    </el-col>  
            </el-row>
        </div>
    </div>
</template>
<script>
import BoxContent from "../components/boxContent";
export default {
    components: {
        BoxContent
    },
    props:{
        weekDay:Number
    },
    data(){
        return {
            weekDayList:[]
        }
    },
    filters:{
        weekDayFilter(weekDay){
            switch(weekDay){
                case 0:{
                    return "日曜日"
                }
                case 1:{
                    return "月曜日"
                }
                case 2:{
                    return "火曜日"
                }
                case 3:{
                    return "水曜日"
                }
                case 4:{
                    return "木曜日"
                }
                case 5:{
                    return "金曜日"
                }
                case 6:{
                    return "土曜日"
                }
                
            }
        },
        weekColorFilter(weekDay){
             switch(weekDay){
                case 0:{
                    return "sunday"
                }
                case 1:{
                    return "monday"
                }
                case 2:{
                    return "tuesday"
                }
                case 3:{
                    return "wednesday"
                }
                case 4:{
                    return "thursday"
                }
                case 5:{
                    return "friday"
                }
                case 6:{
                    return "saturday"
                }
                
            }
        },
        imgUrlFilter(path){
            return process.env.VUE_APP_HTTP_ROOT+path;
        },
        titleLinkFilter(id){
            
              return "/view/detail/"+id;
        }
    },
    mounted(){
        this.$http.get("bangumis?weekday="+this.weekDay).then(resopnse=>{
              this.weekDayList = resopnse.body;
        });
    }
};
</script>
<style>
.week{
    overflow: hidden;
    position: relative;
    margin-top: 10px;
}
.week .box-header{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
    padding-top:2px;
    padding-bottom: 2px;
}
.week-title{
    overflow: hidden;
    position: absolute;
    bottom: 0;
    top: 0;
    width: 20%;
    text-align: center;
}
.week-title span{
    position: absolute;
    height: 80px;
    top: calc(50% - 40px);
    width: 20px;
    left: calc(50% - 10px);
    font-size: 20px;
    color:#ffffff;
}
.week-content{
    overflow: hidden;
    width: 80%;
    margin-left: 20%;
}
.monday{
    background:#F08F90; 
}
.tuesday{
    background:#AA8736;
}
.wednesday{
    background:#FFA26B;
}
.thursday{
    background:#8C9E5E;
}
.friday{
    background: #a2d7dd;
}
.saturday{
    background: #B9A193;
}
.sunday{
    background: #875F9A;
}
</style>
