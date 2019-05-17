<template>
    <div class="Systeam" :style="{height:windowHeight + 'px'}">
        <div class="Mean">
            <h4>VUE后台管理</h4>
            <div :style="{height:windowHeight + 'px'}">
                <ul class="Mean-list" :style="{top:MeanListTop + 'px'}" @mousewheel="mousewheel">
                    <li v-for="item in Mean" :key="item.Id" @click="LinkRouter(item.Path,item.Id)" :style="{background:item.LinkBackground}">
                        {{item.Text}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="SysteamRight">
            <div class="header">
                <div class="usermessage">
                    <img src="../assets/logo.png" alt="" class="user-img">
                    <p class="user-name">Vue</p>
                    <p class="user-fa"><i class="fa fa-angle-down"></i></p>
                </div>
            </div>
            <div class="SysteamContent" :style="{height:SysteamContent + 'px'}">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Systeam',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      windowHeight:$(window).innerHeight(),
      MeanListTop:38,
      SysteamContent:'',
      Mean:[
          {'Id':'2008741248741','Text':'首页','Path':'/Systeams/Console','LinkBackground':'#191c23'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage','LinkBackground':''},
      ]
    }
  },
  created(){
    
    this.$router.push({
        path:'/Systeams/Console',
        query:{
            id:'1'
        }
    })
  },
  mounted(){
      this.$data.SysteamContent = $(window).innerHeight() - $('.header').innerHeight() - 20
    //   console.log($(window).innerHeight() - $('.header').innerHeight() - 20)
  },
  methods:{
      LinkRouter(Path,Id){
        var MeanList = this.$data.Mean;
        MeanList.forEach(e => {
            if(e.Id == Id){
                e.LinkBackground = '#191c23';
            }else{
                e.LinkBackground = '';
            }
        });
        
        this.$data.Mean = MeanList;
        this.$router.push({
            path:Path
        })
      },
      mousewheel(e){       
         
        var MeanListTop = this.$data.MeanListTop,windowHeight = this.$data.windowHeight;
        if (e.wheelDelta > 0) {
            MeanListTop += 60;
            if (MeanListTop >= 0) {
                MeanListTop = 38;
            }
            this.$data.MeanListTop = MeanListTop;
        
        }
        else {
            MeanListTop -= 60;
            if(Math.abs(MeanListTop) >= ($('.Mean-list').innerHeight() - windowHeight)){
                MeanListTop = - ($('.Mean-list').innerHeight() - windowHeight);
            }
            this.$data.MeanListTop = MeanListTop;
            
        }
        return false;
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Systeam{
        overflow: hidden;
    }
    .Mean{
        float: left;
        background: #2d313e;
        color: #fff;
        font-size: 16px;
        line-height: 38px;
        width: 200px;
        text-align: center;
        position: relative;
    }
    .Mean h4{
        z-index: 9999;
    }
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
    }
    .Mean-list li:hover{
        background: #191c23;
    }
    .header{
        background: #2d313e;
        color: #fff;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        padding: 10px 15px;
    }
    .usermessage{
        float: right;
        width: 10%;
        overflow: hidden;
        cursor: pointer;
        min-width: 150px;
    }
    .user-img{
        float: left;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .user-name{
        float: left;
        width: calc(80% - 30px);
        /* text-indent: 10px; */
        font-size: 14px;
        font-weight: 600;
        margin-left: 20px;
    }
    .user-fa{
        float: right;
        width: 10px;
    }
    .SysteamRight{
        float: left;
        width: calc(100% - 200px);
    }
    .SysteamContent{
        background: rgb(243, 243, 243);
        padding: 10px 15px;
    }
</style>
