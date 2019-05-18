<template>
    <div class="Console">
        <div class="Console-header">
            <h4 class="BoxSize">可视化数据</h4>
            <div class="Console-Nmuber">
                <div class="Console-Nmuber-1 BoxSize Consoles1">
                    <h4>人数统计</h4>
                    <div class="Console-content-div">
                        <i class="fa fa-podcast"></i>
                    </div>
                </div>
                <div class="Console-Nmuber-1 BoxSize Consoles2">
                    <h4>待办事项</h4>
                </div>
                <div class="Console-Nmuber-1 BoxSize Consoles3">
                    <h4>系统通知</h4>
                </div>
                <div class="Console-Nmuber-1 BoxSize Consoles4">
                    <h4>当前时间</h4>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Console',
    data(){
        return {
           
        }
    },
}
</script>
<style lang="less" scoped>
    @width20:100%/4 - 1%*2;
    @color-top:#fff;
    @backgroundAll:#fff;
    .Console-header{
        background: @backgroundAll;
        padding: 0 10px;
        padding-bottom: 10px;
    }
    .BoxSize{
        padding: 5px 10px;
        background: #fff;
        margin: 5px 0;
        h4{
            font-weight: 600;
            position: relative;
        }
        h4:after{
            content:' ';
            height : 1px;
            width: 100%;
            background: #fff;
            position: absolute;
            bottom: -5px;
            left: 0px;
        }   
    }
    .Console-Nmuber{
        margin-left: -1%;
        margin-right:-1%;
        overflow: hidden;
    }
    .Console-Nmuber-1{
        width: @width20;
        float: left;
        color: @color-top;
        padding: 15px 10px;
        padding-top: 10px;
        box-sizing: border-box;
        margin: 0 1%;
    }
    .Console-content-div{
        overflow: hidden;
        margin-top: 15px;
    }
    .Consoles1{
        background: cadetblue;
    }
    .Consoles2{
        background: skyblue;
    }
    .Consoles3{
        background: sienna;
    }
    .Consoles4{
        background: chocolate;
    }
</style>


