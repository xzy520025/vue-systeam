<template>
    <div class="UserMessage">
        <div class="box">
            <input type="text" v-model="a">
            a:{{a}}
        </div>
        c:{{c}}
        d:{{d()}}
        e:{{e()}}
    </div>
</template>
<script>
export default {
    name:'UserMessage',
    data(){
        return {
           a:1,
           b:2
        }
    },
    created(){
        this.newdate;
    },
    computed:{
        c(){
           return this.b = parseInt(this.a) + 1;
        }
    },
    methods:{
        d(){
            //return this.b = parseInt(this.a) + 1;
        },
        e(){
            //this.d();
            console.log(this.b)
        }
    }
}
</script>
<style lang="less" scoped>
//    #fn{
//        .br1(@width,@height,@color) when (@width>100px) and (@color=#999){
//             width: @width;
//             height: @height;
//             color: @color;
//        }

//        .bg(@bgg) when (@bgg=green) , (@bgg=yellow){
//             background: @bgg;
//        }

//        .fz(@fzs:16px) when not (@fzs=20px){
//             font-size: @fzs;
//        }
//    }
//    .box{
//        #fn>.br1(105Rpx,300px,#999);
//        #fn>.bg(green);
//        #fn>.fz(12px);
//    }
//     //less
//     .Mean-list{
//         position: absolute;
//         top:38px;
//         left: 0px;
//         width: 100%;
//         transition: all 0.6s;
//         li{
//             cursor: pointer;
//             transition: all 0.6;
//             position: relative;
//             ul{
//                 background: #ffff;
//             }
//         }
//     }

    //css
 
</style>


