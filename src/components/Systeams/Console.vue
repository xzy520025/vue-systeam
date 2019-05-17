<template>
    <div class="Console">
        <h4 class="BoxSize">可视化数据</h4>
        <div class="Console-Nmuber">
            <div class="Console-Nmuber-1 BoxSize Consoles1" style="margin-left: 2px;">
                <h4>人数统计</h4>
                <div class="Console-content-div"></div>
            </div>
            <div class="Console-Nmuber-1 BoxSize Consoles2" style="margin-left: 5%;">
                <h4>待办事项</h4>
            </div>
            <div class="Console-Nmuber-1 BoxSize Consoles3" style="margin-left: 5%;">
                <h4>系统通知</h4>
            </div>
            <div class="Console-Nmuber-1 BoxSize Consoles4" style="margin-left: 5%;">
                <h4>当前时间</h4>
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
<style scoped>
    .BoxSize{
        padding: 5px 10px;
        background: #fff;
        box-shadow: 0 0 3px 2px #ccc;
        margin: 5px 0;
    }
    .Console-Nmuber{
        /* overflow: hidden; */
    }
    .Console-Nmuber-1{
        width: 20%;
        float: left;
        color: #fff;
        padding: 15px 10px;
        padding-top: 10px;
    }
    .BoxSize h4{
        font-weight: 600;
        position: relative;
    }
    .BoxSize h4:after{
        content:' ';
        height : 1px;
        width: 100%;
        background: #fff;
        position: absolute;
        bottom: -5px;
        left: 0px;
    }
    .Console-content-div{
        
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

