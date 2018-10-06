<template>
    <div class="view-list">
        <weak-content weekColor = "monday" weekDay="月曜日">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item,index) in mondayList" :key="index">
                        <box-content :title="item.title" :imgUrl="item.cover.path | imgUrlFilter" :titleLink="item._id | titleLinkFilter"></box-content>
                    </el-col>
                    
                     
                </el-row>
            </weak-content>
             <weak-content weekColor = "tuesday" weekDay="火曜日">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item,index) in tuesdayList" :key="index">
                        <box-content :title="item.title" :imgUrl="item.cover.path | imgUrlFilter" :titleLink="item._id | titleLinkFilter"></box-content>
                    </el-col>
                </el-row>
            </weak-content>
             <weak-content weekColor = "wednesday" weekDay="水曜日">
                <el-row :gutter="20">
                     <el-col :span="6" v-for="(item,index) in wednesdayList" :key="index">
                        <box-content :title="item.title" :imgUrl="item.cover.path | imgUrlFilter" :titleLink="item._id | titleLinkFilter"></box-content>
                    </el-col>
                    
                </el-row>
            </weak-content>
            <weak-content weekColor = "thursday" weekDay="木曜日">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item,index) in thursdayList" :key="index">
                        <box-content :title="item.title" :imgUrl="item.cover.path | imgUrlFilter" :titleLink="item._id | titleLinkFilter"></box-content>
                    </el-col>
                    
                     
                </el-row>
            </weak-content>
            <weak-content weekColor = "friday" weekDay="金曜日">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item,index) in fridayList" :key="index">
                        <box-content :title="item.title" :imgUrl="item.cover.path | imgUrlFilter" :titleLink="item._id | titleLinkFilter"></box-content>
                    </el-col>
                     
                </el-row>
            </weak-content>
            <weak-content weekColor = "saturday" weekDay="土曜日">
                <el-row :gutter="20">
                   <el-col :span="6" v-for="(item,index) in saturdayList" :key="index">
                        <box-content :title="item.title" :imgUrl="item.cover.path | imgUrlFilter" :titleLink="item._id | titleLinkFilter"></box-content>
                    </el-col>
                    
                     
                </el-row>
            </weak-content>
            <weak-content weekColor = "sunday" weekDay="日曜日">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item,index) in sundayList" :key="index">
                        <box-content :title="item.title" :imgUrl="item.cover.path | imgUrlFilter" :titleLink="item._id | titleLinkFilter"></box-content>
                    </el-col>
                     
                </el-row>
            </weak-content>
    </div>
</template>
<script>
import BoxContent from "../components/boxContent";
import WeakContent from "../components/weakDayContent";
export default {
      components: {
        BoxContent,
        WeakContent
      },
      data(){
          return{
              bangumiList:[]
          }
      },
      computed:{
          mondayList(){
              let array = [];
              for(let index=0;index<this.bangumiList.length;index++){
                  if(this.bangumiList[index].weekDay == 1){
                      array.push(this.bangumiList[index])
                  }
              }
              return array;
          },
          tuesdayList(){
              let array = [];
              for(let index=0;index<this.bangumiList.length;index++){
                  if(this.bangumiList[index].weekDay == 2){
                      array.push(this.bangumiList[index])
                  }
              }
              return array;
          },
          wednesdayList(){
              let array = [];
              for(let index=0;index<this.bangumiList.length;index++){
                  if(this.bangumiList[index].weekDay == 3){
                      array.push(this.bangumiList[index])
                  }
              }
              return array;
          },
          thursdayList(){
              let array = [];
              for(let index=0;index<this.bangumiList.length;index++){
                  if(this.bangumiList[index].weekDay == 4){
                      array.push(this.bangumiList[index])
                  }
              }
              return array;
          },
          fridayList(){
              let array = [];
              for(let index=0;index<this.bangumiList.length;index++){
                  if(this.bangumiList[index].weekDay == 5){
                      array.push(this.bangumiList[index])
                  }
              }
              return array;
          },
          saturdayList(){
              let array = [];
              for(let index=0;index<this.bangumiList.length;index++){
                  if(this.bangumiList[index].weekDay == 6){
                      array.push(this.bangumiList[index])
                  }
              }
              return array;
          },
          sundayList(){
              let array = [];
              for(let index=0;index<this.bangumiList.length;index++){
                  if(this.bangumiList[index].weekDay == 0){
                      array.push(this.bangumiList[index])
                  }
              }
              return array;
          }
      },
      filters:{
          imgUrlFilter(path){
            return "http://localhost:3000"+path;
          },
          titleLinkFilter(id){
              console.log(id);
              return "/view/detail/"+id;
          }
      },
      mounted(){
          this.$http.get("http://localhost:3000/bangumis").then(resopnse=>{
              this.bangumiList = resopnse.body;
          });
      }
}
</script>
<style scoped>
.el-row{
    width: 100%;
}
</style>
