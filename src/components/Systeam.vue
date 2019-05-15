<template>
    <div class="Systeam" :style="{height:windowHeight + 'px'}">
        <div class="Mean">
            <h4>VUE后台管理</h4>
            <div :style="{height:windowHeight + 'px'}">
                <ul class="Mean-list" :style="{top:MeanListTop + 'px'}" @mousewheel="mousewheel">
                    <li v-for="item in Mean" :key="item.Id" @click="LinkRouter(item.Path)">
                        {{item.Text}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="">
            <router-view/>
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
      Mean:[
          {'Id':'2008741248741','Text':'首页','Path':'/Systeams/Console'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
          {'Id':'2008754156487','Text':'个人中心','Path':'/Systeams/UserMessage'},
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
  methods:{
      LinkRouter(Path){
        this.$router.push({
            path:Path,
            query:{
            
            }
        })
      },
      mousewheel(e){       
         
        var MeanListTop = this.$data.MeanListTop,windowHeight = this.$data.windowHeight;
        if (e.wheelDelta > 0) {
            MeanListTop += 60;
            if (MeanListTop >= 0) {
                MeanListTop = 0;
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
</style>
