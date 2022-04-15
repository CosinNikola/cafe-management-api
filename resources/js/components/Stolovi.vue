<template>
<div class="container">
  <Sto v-for="sto in stolovi" :key="sto.id" :data="sto"/>
</div>
</template>

<script>
import Sto from './Sto.vue'
export default {
    components:{
        Sto
        },
    data(){
        return{
            stolovi: []
        }
    },
    methods: {
        fetchData(){
            fetch('/api/stolovi')
            .then(res => res.json())
            .then(data => this.stolovi = data)
            .catch(err => console.log(err))
        }
    },
    mounted(){
        this.fetchData();
    }
}
</script>

<style scoped>
    .container{
        display:flex;
        flex-direction: row;
        width: 80%;
        justify-content: space-evenly;
        margin: 20px auto;
    }
</style>