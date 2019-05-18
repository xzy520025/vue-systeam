<template>

    <!-- <ul class="" v-if="model.Children != []">
        <li>{{model.Text}}</li>
        <recur-sive v-for="item in model.Children" :model="item" :key="item.Id"></recur-sive>
    </ul> -->
    <li :class="'item-list-'+model.Leavl">
        <span style="color:green;">{{model.Text}}</span>
        <ul v-if="model.Children != []" :class="'item-ul-'+model.Leavl">
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
            msg:'111'
        }
    },
    created(){
        console.log(this.model);
    },
    computed:{
       
    },
    methods:{

    }
}
</script>
