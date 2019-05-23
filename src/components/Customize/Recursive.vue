<template>
    <li :class="CssName">
        <span class="TreeSpan" style="color:#fff;" @click="LinkRouter(model.Path,model.Id,$event)" :data-id="model.Id" ref="dataId" :class="bgg ? 'active':'no-active'">{{model.Text}}</span>
        <ul v-if="model.Children.length > 0" :class="'item-ul-child item-ul-'+model.Leavl" :id="model.Id">
            <recur-sive v-for="item in model.Children" :model="item" :key="item.Id"></recur-sive>
        </ul> 
    </li>

</template>
<script>
export default {
    name:'recurSive',
    props: ['model'],
    data(){
        return {
            msg:'111',
            CssBg:'',
            CheckId:null,
            bgg:false,
            bgg_child:false
        }
    },
    mounted(){
        let models = this.model;
        var newArr = [];
        function ArrSet(arr){
        
            for(var i = 0;i<arr.length;i++){
                newArr.push(arr[i])
                if(arr[i].Children.length > 0){
                    ArrSet(arr[i].Children)
                }
            }

        }
        for(var i = 0;i<models.length;i++){
            if(models[i].Children.length > 0){
                ArrSet(models[i].Children)
            }else{
                models[i]['CLass'] = 'aaa';
                newArr.push(models[i])
            }
        }
        console.log(newArr)
    },  
    computed:{
       CssName(){
           return this.model.Children.length > 0 ?('item-list item-list-Children item-list-'+this.model.Leavl):('item-list item-list-none item-list-'+this.model.Leavl);
       }
    },
    watch:{
        ListHeight(){

        }
    },
    methods:{
        LinkRouter(Path,Id,el){
            this.$data.bgg = true;
            this.$data.bgg_child = true;
            var ids = this.$refs.dataId.dataset.id;
            
            console.log(el)
            if(Path != ''){
                this.$router.push({
                    path:Path
                })
            }else{
                
                $('.item-ul-child').each(function(index,item){
                    var id = $(this).attr('id');
                    $(item).css({'height':'0px'});
                    if(ids == id){
                        $(this).css({'height':'auto'});
                    }else{
                        $(item).css({'height':'0px'})
                    }
                })
            }
      }
    }
}
</script>
<style lang="less">
    .active{
        background: skyblue;
    }
    .no-active{
        background: none;
    }
    .active_child{
        background: green;
    }
    .no-active_child{
        background: gold;
    }
</style>

