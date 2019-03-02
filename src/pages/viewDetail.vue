<template>
    <div class="bangumi-detail">
        <el-row :gutter="24">
                <el-col  :xs="24"  :md="6" >
                    <box-content :title="bangumi.title"  :imgUrl="imgUrl" :cast="bangumi.cast" :staff="bangumi.staff"></box-content>
                </el-col>
                <el-col :xs="24"  :md="18" style="position: absolute;
                        bottom: 0;
                        top: 0;
                        right: 0;
                        display: flex;
                        flex-direction: column;">
                    <box-content title="播放日期" :content="bangumi.weekDay | weekDayFilter"></box-content>
                    <box-content title="简介" :content="bangumi.info"></box-content>
                    <box-content title="种子列表" class="torrentContent" style="">
                        <el-table
                            :data="torrentList"
                            stripe
                            border
                            
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
        
        <el-card class="box-card" v-if="bvideoList.length>0" style="padding-top:0">
            <div slot="header" class="clearfix">
                <span>B站播放数据</span>
            </div>
           
           <div>
               <line-chart  v-for="item in bvideoList" :bvideo="item" ></line-chart>
           </div>
            <!-- <el-collapse v-model="activeNames" @change="handleChange"  accordion :change="refreshCharts" >
                <line-chart  v-for="item in bvideoList" :bvideo="item" ></line-chart>
 
            </el-collapse> -->
        </el-card>
        
    </div>
</template>
<script>
import BoxContent from "../components/boxContent";
import LineChart from "../components/lineChart";
export default {
    data(){
        this.dataZoom =[
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 20 // 数值的设置参考http://echarts.baidu.com/option.html#dataZoom-slider.start
            }
        ];
        
        return {
            activeNames: ['1'],
            activeName: '1',
            bangumi:{
                title:"",
                info:"",
                cover:"",
                weekDay:0,
                cast:[],
                staff:[],
            },
            url:process.env.VUE_APP_HTTP_ROOT,
            torrentList:[],
            bvideoList:[]
        }
    },
    computed:{
        imgUrl(){
            if(this.bangumi.cover!=""){
                return process.env.VUE_APP_HTTP_ROOT+this.bangumi.cover.path;
            }else{
                return "";
            }
            
        },
        
    },
    components: {
        BoxContent,
        LineChart
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
    watch: {
      
      activeNames(v){
        //   console.log(v);
        // this.$nextTick(_ => {
        //     console.log(v)
        //   this.$refs.v.refreshCharts();
        // })
      }
    },
    mounted(){
        this.$http.get("bangumis/"+this.id).then(response=>{
            this.bangumi = response.body;
        });

        this.$http.get("bvideos",{
            params:{
                bangumiId:this.id
            }
        }).then(response=>{
            this.bvideoList = response.body.datas;
        })

        this.$http.get("torrents",{
            params:{
                bangumiId:this.id
            }
        }).then((response)=>{
            this.torrentList = response.body.datas;
        })
    },
    methods:{
        handleChange(val) {
            // console.log(val);
        },
        refreshCharts(){
            this.$nextTick(_ => {
                this.$refs[`line-chart`].refreshCharts();
            })
        }
    }
}
</script>
<style >
    a{
        text-decoration: none;
        color: #666666;
    }
    /* .title:first-child{
        margin-top: 0;
    } */
    .torrentContent { 
        display: flex;
        flex-direction: column;
        flex-grow:1;
        overflow:hidden
    }
    .torrentContent .box-body{
        flex-grow: 1;
        overflow: auto;
    }
</style>

