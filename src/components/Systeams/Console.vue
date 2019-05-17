<template>
    <div class="Console">
        <h4 class="BoxSize">可视化数据</h4>
        <div class="Console-Nmuber">
            <div class="Console-Nmuber-1 BoxSize">
                1
            </div>
            <div class="Console-Nmuber-1 BoxSize">
                1
            </div>
            <div class="Console-Nmuber-1 BoxSize">
                1
            </div>
            <div class="Console-Nmuber-1 BoxSize">
                1
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
        overflow: hidden;
    }
    .Console-Nmuber-1{
        width: 20%;
        float: left;
        margin: 5px 2%;
    }
</style>

