<template>
    <li :class="CssName">
        <span :class="'TreeSpan TreeSpan-'+model.Leavl" :style="{background:model.backgorund}" style="color:#fff;" @click="LinkRouter(model.Path,model.Id,model,$event)" :data-id="model.Id" ref="dataId">{{model.Text}}</span>
        <ul v-if="model.Children.length > 0" :class="'item-ul-child item-ul-'+model.Leavl" :id="model.Id">
            <recur-sive v-for="(item,i) in model.Children" :model="item" :Mindex="i" :key="item.Id"></recur-sive>
        </ul> 
    </li>

</template>
<script>
export default {
    name:'recurSive',
    props: ['model','Mindex'],
    data(){
        return {
            msg:'111',
            CssBg:'',
            CheckId:null,
            bgg:false,
            bgg_child:false,
            bggs:'red'
        }
    },
    mounted(){
        var Arr = this.model;
        this.model['backgorund'] = 'none';
        this.model['height'] = '0px';
        this.model['_ID'] = this.model.Id;
        console.log(this.Mindex)
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
        LinkRouter(Path,Id,Arrs,el){
            var ids = this.$refs.dataId.dataset.id;
            $('.item-ul-'+Arrs.Leavl).height(0);
            $('.TreeSpan-'+Arrs.Leavl).css({'background':'none'});
            $('.TreeSpan-'+(parseInt(Arrs.Leavl)+1)).css({'background':'none'});
            if(Path != ''){
                this.$router.push({
                    path:Path
                })
                $('.TreeSpan-'+Arrs.Leavl+'[data-id='+ids+']').css({'background':'rgb(3,'+Arrs.Leavl+','+(Arrs.Leavl*12)+')'});
            }else{
                $('.item-ul-'+Arrs.Leavl+'[id='+ids+']').css({'height':'auto'});
                $('.TreeSpan-'+Arrs.Leavl+'[data-id='+ids+']').css({'background':'rgb(3,'+Arrs.Leavl+','+(Arrs.Leavl*12)+')'});

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

