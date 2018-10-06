<template>
    <div class="box box-widget">
        <div class="box-header with-border">
            <div class="box-title">
                <router-link :to="url">
                    <span>{{title}}</span>
                </router-link>
            </div>
            <!-- /.user-block -->
            <div class="box-tools">
            </div>
            <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="cover" v-if="imgUrl">
                <img :src="imgUrl"></img>
            </div>
            <div v-if="content">
                <p>{{content}}</p>
            </div>
            <div class="cast" v-if="cast">
                <div class="cast-title">
                    <span>CAST</span>
                </div>
                <div class="cast-item" v-for="item in cast">
                    <span>{{item}}</span>
                </div>
            </div>
            <div class="staff" v-if="staff">
                <div class="staff-title">
                    <span>STAFF</span>
                </div>
                <div class="staff-item" v-for="item in staff">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>
        <!-- /.box-body -->
        <!-- <div class="box-footer">
        </div> -->
        <!-- /.box-footer -->
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        content:String,
        cast:Array,
        staff:Array,
        imgUrl:String,
        titleLink:String
    },
    data(){
        return{
           
        }
    },
    computed:{
        url(){
            if(this.titleLink){
                return this.titleLink;
            }else{
                return "";
            }
        }
    }
};
</script>
<style scoped>
.box {
    position: relative;
    margin-top: 10px;
    
    border-radius: 3px;
    background: #ffffff;
    border-top: 3px solid #d2d6de;
    margin-bottom: 5px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    margin-bottom: 10px;
}
.box:hover{
    box-shadow: 7px 7px 5px #888888;
}
.box-widget {
    border: none;
    position: relative;
}
.box-header {
    color: #666666;
    display: block;
    padding: 10px;
    position: relative;
}
.box-title{
    color:#333333;
    font-weight: bold;
    
    
}
.box-title span{
    cursor: pointer;
}
.box-title a{
    text-decoration: none;
    color: #666666;
}
.box-title span:hover{
    border-bottom: 2px solid #12ccec;
}
.box-header.with-border {
    border-bottom: 1px solid #f4f4f4;
}
.box-header > .box-tools {
    position: absolute;
    right: 10px;
    top: 5px;
}
.box-body {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 10px;
    cursor: pointer;
}
.box-footer {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top: 1px solid #f4f4f4;
    padding: 10px;
    background-color: #fff;
}
.cover img{
    width: 100%;
}
.cast , .staff{
    margin-top: 10px;
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    padding-top: 5px;
    padding-bottom: 5px;
}
.cast-title , .staff-title{
    font-size: 16px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.cast-item , .staff-item{
    text-align: center;
    padding-top: 3px;
    padding-bottom: 3px;
}
</style>
