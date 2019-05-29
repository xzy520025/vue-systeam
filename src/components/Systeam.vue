<template>
    <div class="Systeam" :style="{height:windowHeight + 'px'}">
        <div class="Mean">
            <h4>VUE后台管理</h4>
            <div :style="{height:windowHeight + 'px'}">
                <ul class="Mean-list" :style="{top:MeanListTop + 'px'}" @mousewheel="mousewheel">
                    <blockquote v-for="(item,i) in Mean" :key="item.Id">
                        <recur-sive :model="item" :Mindex="i"></recur-sive>
                    </blockquote>
                </ul>
            </div>
        </div>
        <div class="SysteamRight">
            <div class="header">
                <div class="BtnAddTreeList" @click="AddTree()">
                    添加树结构
                </div>
                <div class="usermessage">
                    <img src="../assets/logo.png" alt="" class="user-img">
                    <p class="user-name">Vue</p>
                    <p class="user-fa" @click="CloseAddTree()"><i class="fa fa-angle-down"></i></p>
                </div>
            </div>
            <div class="SysteamContent" :style="{height:SysteamContent + 'px'}">
                <router-view/>
            </div>
        </div>
        <div class="AddTreeBox" :style="{'display':AddTreeBoxState}">
            <div class="title">
                <p class="t1">添加树结构数据</p>
                <p class="c1"><i class="fa fa-close"></i></p>
            </div>
            <div class="content">
                <div class="la-from-group">
                    <label for="">名称</label>
                    <div class="input-box">
                        <input type="text" v-model="TreeName">
                    </div>
                </div>
                <div class="la-from-group">
                    <label for="">级次</label>
                    <div class="input-box">
                        <select type="text" v-model="TreeLevel">
                            <option :value="item.Id" v-for="item in selectMean" :key="item.Id" :id="item.Id">{{item.Text}}</option>
                        </select>
                    </div>
                </div>
                <div class="la-from-group">
                    <label for="">路径</label>
                    <div class="input-box">
                        <input type="text" v-model="TreePath">
                    </div>
                </div>
                <div class="la-from-group">
                    <label for="">排序</label>
                    <div class="input-box">
                        <input type="text" v-model="TreeSort">
                    </div>
                </div>
                <div class="la-from-group">
                    <label for="">备注</label>
                    <div class="input-box textarea-input-box">
                        <textarea type="text" v-model="TreeDep"></textarea>
                    </div>
                </div>
                <div class="la-from-group">
                    <div class="btn-group">
                        <div class="la-btn la-btn-success" @click="AddTreeOn()">提交</div>
                        <div class="la-btn la-btn-defaut" @click="CloseAddTree()">取消</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import recurSive from './Customize/Recursive';
export default {
  name: 'Systeam',
  components:{
      recurSive:recurSive,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      windowHeight:$(window).innerHeight(),
      MeanListTop:38,
      SysteamContent:'',
      AddTreeBoxState:'none',
      TreeName:'',
      TreeLevel:'',
      TreePath:'',
      TreeSort:'',
      TreeId:0,
      TreeDep:'',
      selectMean:[
          {
              'Id':'0',
              'Text':'== 顶级节点 =='
          }
      ],
      Mean:[
            // {
            //     'Id':'2008741248741',
            //     'Text':'系统管理',
            //     'Path':'',
            //     'Leavl':'1',
            //     'Children':[
            //         {
            //             'Id':'20588478784',
            //             'Text':'控制台',
            //             'Path':'/Systeams/Console',
                
            //             'Leavl':'2',
            //             'Children':[]
            //         },
            //         {
            //             'Id':'2008754156487',
            //             'Text':'个人中心',
            //             'Path':'/Systeams/UserMessage',
            //             'Children':[],
            //             'Leavl':'2',
            //         }
            //     ]
            // },
            // {
            //     'Id':'2008741248741222',
            //     'Text':'业务视图',
            //     'Path':'',
            //     'Leavl':'1',
            //     'Children':[]
            // }
      ]
    }
  },
  created(){
    this.$router.push({
        path:'/Systeams/Console',
    })
  },
  mounted(){
      this.$data.SysteamContent = $(window).innerHeight() - $('.header').innerHeight() - 20;
    //   console.log($(window).innerHeight() - $('.header').innerHeight() - 20)
  },
  computed:{
      Input_data(){
          var _this = this;
          this.$data.TreeId++;
          let data = {
                'Id':_this.$data.TreeId,
                'Text':_this.$data.TreeName,
                'Path':_this.$data.TreePath,
                'Leavl':_this.$data.TreeLevel,
                'Sort':_this.$data.TreeSort,
                'Dep':_this.$data.TreeDep,
                'Children':[]
            }
        return data;
      },
      TreeArr(){
          var _this = this;
          function ForFor(arr){
              for(let i = 0;i<arr.length;i++){
                  if(arr[i].Id == _this.Input_data.Leavl){
                      arr[i].Children.push(_this.Input_data);
                  }
                  if(arr[i].Children.length > 0){
                      ForFor(arr[i].Children);
                  }
              }
          }
          if(this.Input_data.Leavl != 0){
              for(let i = 0;i<_this.$data.Mean.length;i++){
                  if(_this.$data.Mean[i].Id == _this.Input_data.Leavl){
                      _this.$data.Mean[i].Children.push(_this.Input_data);
                  }else
                  if(_this.$data.Mean[i].Children.length > 0){
                      ForFor(_this.$data.Mean[i].Children)
                  }
              }
          }else{
              this.$data.Mean.push(this.Input_data);
          }
        
          this.$data.selectMean.push(this.Input_data);
      },
      Option(){
          this.$data.TreeLevel = this.$data.selectMean[0].Id;
      },
      ClearInput(){
        this.$data.TreeId = '';
        this.$data.TreeName = '';
        this.$data.TreePath = '';
        this.$data.TreeSort = '';
        this.$data.TreeDep = '';
        this.Option;
      }
  },
  methods:{
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
    },
    AddTree(){
        this.$data.AddTreeBoxState = 'block';
        this.ClearInput;
    },
    CloseAddTree(){
        this.$data.AddTreeBoxState = 'none';
    },
    AddTreeOn(){
        this.TreeArr
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" deep>
    @background-noHover:#2d313e;
    @background-Hover:#191c23;
    @font-size-16:16px;
    @background-noHover1:yellow;
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
        h4{
          z-index: 9999;  
        }
    }
    .Mean-list{
        position: absolute;
        top:38px;
        left: 0px;
        width: 100%;
        transition: all 0.6s;
        // li{
        //     cursor: pointer;
        //     transition: all 0.6;
        //     position: relative;
        //     ul{
        //         position: absolute;
        //         width: 100%;
        //         top: 0px;
        //         left: 0px;
        //     }
           
        // }
        // li:hover{
        //     background: #191c23;
        // }
    }

    .item-list-Children{
        // position: relative;
    }

    .item-ul-child{
        // position:absolute;
        overflow: hidden;
        height: 0px;
        transition: all 0.3s;
    }

    .TreeSpan{
        color: #ffffff;
        display: block;
        width: 100%;
        height: 38px;
        line-height: 38px;
        transition: all 0.3s;
        cursor: pointer;
    }
    .TreeSpan:hover{
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
    .BtnAddTreeList{
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        float: left;
        font-size: 12px;
        cursor: pointer;
    }
    .BtnAddTreeList:hover{
        background: rgb(3, 1, 12);
    }
    .AddTreeBox{
        position: fixed;
        width: 500px;
        left: 50%;
        margin-left: -250px;
        top: 50%;
        height: 400px;
        margin-top: -200px;
        background: #fff;
        .title{
            background: #191c23;
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            overflow: hidden;
            .t1{
                text-indent: 15px;
                float: left;
            }
            .c1{
                float: right;
                width: 30px;
                background: red;
                text-align: center;
                cursor: pointer;
            }
        }
        .content{
            padding: 0 15px;
        }
        .la-from-group{
            overflow: hidden;
            width: 100%;
            margin: 10px 0;
            
            label{
                float: left;
                text-indent: 15px;
                width: 25%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                height: 30px;
                line-height: 30px;
            }
            .input-box{
                float: right;
                border: 1px solid #ccc;
                width: 73%;
                input{
                    border: 0px;
                    background: none;
                    width: 100%;
                    line-height: 28px;
                    text-indent: 8px;
                    font-size: 14px;
                }
                textarea{
                    width: 100%;
                    font-size: 14px;
                    line-height: 28px;
                    border: 0px;
                    background: none;
                    height: 150px;
                    resize: none;
                }
            }
        }
        .btn-group{
            overflow: hidden;
            float: right;
            .la-btn{
                padding: 6px 12px;
                float: left;
                cursor: pointer;
                margin: 0 10px;
                font-size: 14px;
                border: 1px solid #c6c6c6;
                border-radius: 5px;
            } 
            .la-btn-defaut{
                border: 1px solid #c6c6c6;
                background: #fff;
                &:hover{
                    color:#fff;
                    background:rgb(185, 187, 185);
                    border: 1px solid rgb(143, 145, 143);
                }
            }
            .la-btn-success{
                border: 1px solid rgb(22, 117, 22);
                background:forestgreen;
                color: #fff;
                &:hover{
                    color:#fff;
                    background:rgb(31, 105, 31);
                    border: 1px solid rgb(22, 117, 22);
                }
            }
        }
    }

   
</style>

