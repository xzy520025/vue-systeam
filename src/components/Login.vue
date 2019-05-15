<template>
    <div class="Login" :style="{height:LoginHeight + 'px'}">
        <div class="LoginBox">
            <div class="LoginBoxContent">
                <h4>Vue后台管理系统</h4>
                <div class="LoginInput">
                    <label for="">用户名</label>
                    <input type="text" v-model="username">
                </div>
    
                <div class="LoginInput">
                    <label for="">密码</label>
                    <input type="text" v-model="password">
                </div>
    
                <div class="LoginInput"  style="margin-bottom:5px;">
                    <label for="">验证码</label>
                    <input type="text" class="code" v-model="code">
                    <div class="codenumber"></div>
                </div>
                <div class="Tip" :style="{color:Tipcolor,opacity:Tipopacity}">
                   {{TipMessage}}
                </div>
                <div class="LoginInput" style="margin-top:5px;">
                    <div class="loginIn" @click="login">登录</div>
                    <div class="findPassword">忘记密码?</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return {
            LoginHeight:document.documentElement.clientHeight,
            username:'',
            password:'',
            code:'',
            TipMessage:'',
            Tipcolor:'#000',
            Tipopacity:0
        }
    },
    methods:{
        login(){
            var vm_data = this.$data;
            if(vm_data.username == ''){
                // console.log(new TWEEN.Tween)
                vm_data.TipMessage = '用户名不能为空';
                vm_data.Tipcolor = 'red';
                vm_data.Tipopacity = 1;
                return ;
            }else
            if(vm_data.password == ''){
                vm_data.TipMessage = '密码不能为空';
                vm_data.Tipcolor = 'red';
                vm_data.Tipopacity = 1;
                return ;
            }else
            if(vm_data.code == ''){
                vm_data.TipMessage = '验证码不能为空';
                vm_data.Tipcolor = 'red';
                vm_data.Tipopacity = 1;
                return ;
            }else{
                this.$router.push({
                    path:'/Systeam',
                    query:{
                        id:'1'
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
    .Login{
        background: url(../assets/login.jpg) 0 0 no-repeat;
        height: 100%;
        position: relative;
        font-size: 14px;
    }
    .LoginBox{
        position: absolute;
        width: 400px;
        top:20%;
        right: 20px;
        background: rgba(255,255,255,.5);
        padding: 10px 15px;
    }
    .LoginBoxContent{
        background: #fff;
        padding: 5px 10px;
    }
    
    .LoginBoxContent h4{
        text-align: center;
        line-height: 32px;
        font-weight: 600;
        font-size: 20px;
    }
    .LoginInput{
        overflow: hidden;
        height: 30px;
        line-height: 30px;
        margin: 15px 0;
    }
    .LoginInput label{
        width: 90px;
        text-align: left;
        display: block;
        float: left;
    }
    .LoginInput input{
        width: 285px;
        float: left;
        height: 28px;
        line-height: 28px;
        background: none;
        border: 1px solid #ccc;
    }
    .LoginInput .code{
        width: 225px;
    }
    .LoginInput .codenumber{
        width: 60px;
        cursor: pointer;
    }
    .LoginInput .loginIn{
        float: left;
        width: 80px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        background: #6ea72d;
        text-align: center; 
        font-size: 12px;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.6s;
    }
    .LoginInput .findPassword{
        float: right;
        cursor: pointer;
        color: cornflowerblue;
    }
    .Tip{
        font-weight: 400;
        line-height: 20px;
        height: 20px;
        transition: all 0.6s;
    }
    .loginIn:hover{
        background: skyblue;
    }
</style>

