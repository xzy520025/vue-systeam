<template>
    <li>
        111
        <!-- <span>{{options.Text}}</span>
        <ul v-if="options.Children.length > 0">
            <select v-for="(item) in options.Children" :key="item.Id" :options="item"></select>
        </ul> -->
    </li>
    
</template>
<script>
export default {
    name:'seleCt',
    props:['options'],
    data(){
        return {

        }
    },
    mounted(){
        debugger;
        console.log(this.options)
    },
    computed:{

    },
    methods:{

    }
}
</script>

