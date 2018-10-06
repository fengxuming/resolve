<template>
    <div class="week" v-bind:class="weekColor">
        <div class="week-title">
            <span>{{weekDay}}</span>
        </div>
        <div class="week-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        weekColor:String,
        weekDay:String
    },
    data(){
        return {
            
        }
    }
};
</script>
<style scoped>
.week{
    overflow: hidden;
    position: relative;
    margin-top: 10px;
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
