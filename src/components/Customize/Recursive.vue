<template>
    <li :class="CssName" v-if="type == 'tree' && model.Id != '0'">
        <span :class="'TreeSpan TreeSpan-'+model.Leavl" :style="{background:model.background}" @click="LinkRouter(model.Path,model.Id,model,$event)" :data-pid="model.ParentId" :data-id="model.Id" ref="dataId">{{model.Text}}</span>
        <ul v-if="model.Children.length > 0" :class="'item-ul-child item-ul-'+model.Id" :id="model.Id" :data-pid="model.ParentId" :style="{height:model.height}">
            <recur-sive v-for="(item) in model.Children" :model="item" :type="'tree'" :key="item.Id"></recur-sive>
        </ul> 
    </li>
    <li v-else-if="type == 'option'" class="optionlist">
        <span :class="'option option-'+model.Leavl" @click="Checkoption(model.Id,model.Text,model.Leavl)">{{model.Text}}</span>
        <ul v-if="model.Children.length > 0" :class="'option-ul-child option-ul-'+model.Leavl" :id="model.Id">
            <recur-sive v-for="(item) in model.Children" :model="item" :type="'option'" :key="item.Id"></recur-sive>
        </ul> 
    </li>
</template>
<script>
export default {
    name:'recurSive',
    props: ['model','type','arrr'],
    data(){
        return {
            ParentId:null
        }
    },
    mounted(){
        let Arr = this.model;

        this.model['_ID'] = this.model.Id;
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
            let ids = this.$refs.dataId.dataset.id;
         
            // console.log($('.TreeSpan-'+(parseInt(Arrs.Leavl)+1)).attr('data-pid') != $('.item-ul-'+Arrs.Id).attr('data-pid'));
            // if($('.TreeSpan-'+(parseInt(Arrs.Leavl)+1)).attr('data-pid') != $('.item-ul-'+Arrs.Id).attr('data-pid')){
            //     $('.item-ul-child6').height(0);
            // }
            
            // $('.TreeSpan-'+Arrs.Leavl).css({'background':'none'});
            // $('.TreeSpan-'+(parseInt(Arrs.Leavl)+1)).css({'background':'none'});
            if(Path != ''){
                this.$router.push({
                    path:Path
                })
                // $('.TreeSpan-'+Arrs.Leavl+'[data-id='+ids+']').css({'background':'rgb(3,'+Arrs.Leavl+','+(Arrs.Leavl*12)+')'});
            }else{
                
                // $('.item-ul-'+Arrs.Id+'[id='+ids+']').css({'height':'auto'});
                // $('.TreeSpan-'+Arrs.Leavl+'[data-id='+ids+']').css({'background':'rgb(3,'+Arrs.Leavl+','+(Arrs.Leavl*12)+')'});

            }
        
            // this.GuiArr(this.arrr,ids)
            console.log(this.model)
            this.ChangeLeftList(this.model.Id);
      },
      Checkoption(Id,Text,level){
          this.$emit('ListenChild',{cId:Id,cText:Text,Top:1000,level:level});
      },
      GuiArr(arr,Id){
        
        for(var y = 0;y<arr.length;y++){
            if(Id == arr[y].Id){
                arr[y].background = 'red';
            }else{
                if(arr[y].Children.length > 0){
                    this.GuiArr(arr[y].Children)
                }else{
                    arr[y].background = 'black';
                  
                }
            }
        }

          
        //   for(var i = 0;i<arr.length;i++){
        //     if(Id == arr[i].Id){
        //         arr[i].background = 'red';
        //     }else{
        //         if(arr[i].Children.length > 0){
        //             arr_(arr[i].Children)
        //         }else{
        //             arr[i].background = 'black';
        //         }
        //     }
        //   }
      },
        ChangeLeftList(Id){
            debugger;
            // let newArr = this.arrr;
            this.$emit('ChangeLeftNenArr',Id);
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
    .optionlist{
    
        line-height: 28px;
        text-indent: 10px;
        cursor: pointer;
    }
</style>

