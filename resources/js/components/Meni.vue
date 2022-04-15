<template>
<div>
    <NoviProizvod />
<div class="container">    
  <Proizvod v-for="proizvod in proizvodi" :key="proizvod.id" :data="proizvod"/>
</div>
</div>
</template>

<script>
import Proizvod from './Proizvod.vue'
import NoviProizvod from './NoviProizvod.vue'
export default {
    components: {
        Proizvod,
        NoviProizvod
    },
    data(){
        return{
            proizvodi: []
        }
    },
    methods: {
        fetchData(){
            fetch('/api/meni')
            .then(res => res.json())
            .then(data => this.proizvodi = data)
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.fetchData()
    }

}
</script>

<style scoped>
    .container{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>