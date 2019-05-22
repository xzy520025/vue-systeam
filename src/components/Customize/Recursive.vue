<template>

    <li :class="CssName">
        <span class="TreeSpan" style="color:#fff;" @click="LinkRouter(model.Path,model.Id,$event)" :data-id="model.Id" ref="dataId" :style="CssBg">{{model.Text}}</span>
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
            CheckId:null
        }
    },
    created(){
    
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
            this.$data.CheckId = this.$refs.dataId.dataset.id;
            var ids = this.$refs.dataId.dataset.id
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
                    }
                })
            }
      }
    }
}
</script>
