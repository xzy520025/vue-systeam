<template>
    <div class="UserMessage">
        <div class="box">
       
        </div>
        
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
        {{c()}}
    </div>
</template>
<script>
export default {
    name:'UserMessage',
    data(){
        return {
           data:'2015/5/5'
        }
    },
    created(){
        this.newdate;
    },
    computed:{
        newdate(){
        
        }
    },
    methods:{
        c(){
            return this.$data.data.split('/').join('-') + (5*10+2501/58+(5000/2*45000));
        }
    }
}
</script>
<style lang="less" scoped>
   #fn{
       .br1(@width,@height,@color) when (@width>100px) and (@color=#999){
            width: @width;
            height: @height;
            color: @color;
       }

       .bg(@bgg) when (@bgg=green) , (@bgg=yellow){
            background: @bgg;
       }

       .fz(@fzs:16px) when not (@fzs=20px){
            font-size: @fzs;
       }
   }
   .box{
       #fn>.br1(105Rpx,300px,#999);
       #fn>.bg(green);
       #fn>.fz(12px);
   }
    //less
    .Mean-list{
        position: absolute;
        top:38px;
        left: 0px;
        width: 100%;
        transition: all 0.6s;
        li{
            cursor: pointer;
            transition: all 0.6;
            position: relative;
            ul{
                background: #ffff;
            }
        }
    }

    //css
    .Mean-list{
        position: absolute;
        top:38px;
        left: 0px;
        width: 100%;
        transition: all 0.6s;
    }
    .Mean-list li{
        cursor: pointer;
        transition: all 0.6;
        position: relative;
    }
    .Mean-list li ul{
        background: #ffff;
    }
</style>


