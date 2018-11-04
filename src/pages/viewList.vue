<template>
    <div class="view-list">
        <weak-content v-for="(weekDay,index) in weekDayCodeList" :weekDay="weekDay" :key="index">
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
              weekDayCodeList:[]
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
</style>
