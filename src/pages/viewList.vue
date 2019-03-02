<template>
    <div class="view-list">
        <div class="view-list-options">
            <div>
                播放日期：
            </div>
            <el-select v-model="startDate" placeholder="请选择" style="margin-left:10px;" size="small">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        
        <weak-content v-for="(weekDay,index) in weekDayCodeList" :weekDay="weekDay" :key="index" :startDate="startDate">
        </weak-content> 
    </div>
</template>
<script>

import WeakContent from "../components/weakDayContent";
export default {
      components: {
        WeakContent
      },
      data(){
          return{
            weekDayCodeList:[],
            options: [{
            value: '2018-10',
            label: '2018秋季'
            }, {
            value: '2019-1',
            label: '2019冬季'
            }],
            startDate: '2019-1'
          }
      },
      computed:{
          
      },
      filters:{
          
      },
      mounted(){
           
      },
      created(){
          let tempWeekDayCodeList = [0,1,2,3,4,5,6];
          let today = parseInt(new Date().getDay());
          for(let index=0;index<tempWeekDayCodeList.length;index++){
              if(tempWeekDayCodeList[0] === today){
                  break;
              }else{
                  tempWeekDayCodeList.push(tempWeekDayCodeList.shift());
              } 
          }
          this.weekDayCodeList = tempWeekDayCodeList;
      }
}
</script>
<style scoped>
.el-row{
    width: 100%;
}
.view-list-options{
    display: flex;
    background: #ffffff;
    margin-top: 8px;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
}
</style>
