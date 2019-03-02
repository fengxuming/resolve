<template>

    <!-- <el-collapse-item :title="bvideo.title" :name="bvideo.aid"> -->
        <div>
            <div class="title" @click="changeShow">{{bvideo.title}}</div>
            <el-tabs type="border-card" v-model="activeName" v-show="isShow">
                <el-tab-pane label="播放数" name="1">
                    <ve-line ref="chart1" :data-zoom="dataZoom" :data="chartData1" :settings="chartSettings1" :extend="extend"></ve-line>
                </el-tab-pane>
                <el-tab-pane label="弹幕数" name="2">
                    <ve-line ref="chart2" :data-zoom="dataZoom" :data="chartData2" :settings="chartSettings2" :extend="extend"></ve-line>
                </el-tab-pane>
                <el-tab-pane label="评论数" name="3">
                    <ve-line ref="chart3" :data-zoom="dataZoom" :data="chartData3" :settings="chartSettings3" :extend="extend"></ve-line>
                </el-tab-pane>
                <el-tab-pane label="收藏数" name="4">
                    <ve-line ref="chart4" :data-zoom="dataZoom" :data="chartData4" :settings="chartSettings4" :extend="extend"></ve-line>
                </el-tab-pane>
                <el-tab-pane label="硬币数" name="5">
                    <ve-line ref="chart5" :data-zoom="dataZoom" :data="chartData5" :settings="chartSettings5" :extend="extend"></ve-line>
                </el-tab-pane>
                <el-tab-pane label="分享数" name="6">
                    <ve-line ref="chart6" :data-zoom="dataZoom" :data="chartData6" :settings="chartSettings6" :extend="extend"></ve-line>
                </el-tab-pane>
                <el-tab-pane label="点赞数" name="7">
                    <ve-line ref="chart7" :data-zoom="dataZoom" :data="chartData7" :settings="chartSettings7" :extend="extend"></ve-line>
                </el-tab-pane>
                
            </el-tabs>
        </div>
    <!-- </el-collapse-item> -->
</template>
<script>
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
        this.chartSettings1 = {
            
            yAxisName: ['播放数'],
            labelMap: {
                'dateTime': '时间',
                'view': '播放数'
            },
            legendName: {
            
            },
            
            scale:[true,true]
        }
        this.chartSettings2 = {
            
            yAxisName: ['弹幕数'],
            labelMap: {
                'dateTime': '时间',
                'danmaku': '弹幕数'
            },
            legendName: {
            
            },
            
            scale:[true,true]
        }
        this.chartSettings3 = {
            
            yAxisName: ['评论数'],
            labelMap: {
                'dateTime': '时间',
                'reply': '评论数'
            },
            legendName: {
            
            },
            
            scale:[true,true]
        }
        this.chartSettings4 = {
            
            yAxisName: ['收藏数'],
            labelMap: {
                'dateTime': '时间',
                'favorite': '收藏数'
            },
            legendName: {
            
            },
            
            scale:[true,true]
        }
        this.chartSettings5 = {
            
            yAxisName: ['硬币数'],
            labelMap: {
                'dateTime': '时间',
                'coin': '硬币数'
            },
            legendName: {
            
            },
            
            scale:[true,true]
        }
        this.chartSettings6 = {
            
            yAxisName: ['分享数'],
            labelMap: {
                'dateTime': '时间',
                'share': '分享数'
            },
            legendName: {
            
            },
            
            scale:[true,true]
        }
        this.chartSettings7 = {
            
            yAxisName: ['点赞数'],
            labelMap: {
                'dateTime': '时间',
                'like': '点赞数'
            },
            legendName: {
            
            },
            
            scale:[true,true]
        }
        this.extend = {
            series: {
                label: {
                    normal: {
                        show: true
                    }
                }
            }
        };
        return {
             rows:[],
             activeName: "1",
             isShow:false
        }
    },
    props:{
        bvideo:Object
    },
    computed:{
        
        chartData1(){
            return {
                columns: ['dateTime','view'],
                rows: this.rows
            } 
        },
        chartData2() {
            return {
                columns: ['dateTime','danmaku'],
                rows: this.rows
            }
            
        },
        chartData3(){
            return {
                columns: ['dateTime','reply'],
                rows: this.rows
            } 
        },
        chartData4() {
            return {
                columns: ['dateTime','favorite'],
                rows: this.rows
            } 
        },
        chartData5() {
            return {
                columns: ['dateTime','coin'],
                rows: this.rows
            } 
        },
        chartData6() {
            return {
                columns: ['dateTime','share'],
                rows: this.rows
            }
        },
        chartData7() {
            return {
                columns: ['dateTime','like'],
                rows: this.rows
            }
        },
    },
    watch: {
      activeName (v) {
          console.log(v);
        this.$nextTick(_ => {
            this.$refs[`chart${v}`].echarts.resize()
        }) 
      }
    },
    methods:{
        changeShow(){
            if(this.isShow){
                this.isShow = false;
            }else{
                this.isShow = true;
                this.refreshCharts()
            }
        },
        refreshCharts(){
            for(let index=1;index<8;index++){
                this.$nextTick(_ => {
                    console.log(index)
                    this.$refs[`chart${index}`].echarts.resize()
                }) 
            }
        }
    },
    mounted(){
        this.$http.get("charts/",{
            params:{
                aid:this.bvideo.aid
            }
        }).then(response=>{
            this.rows = response.body.datas;
            
        });
    }
}
</script>
<style>
    .title:first-child{
      
    }
    .title{
        cursor: pointer;
        padding-bottom: 13px;
        padding-top: 15px;
        border-bottom: 1px solid #eee;
    }
</style>
