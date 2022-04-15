<template>
  <div class="container">
      <h1>Racun</h1>
      <div v-if="data !== null">
          <StavkaRacuna v-for="stavka in data" :data="stavka" :key="stavka.id"/>
      </div>
      <button @click="racunMeni = !racunMeni">+</button>
      <MeniRacun v-if="racunMeni" :data="data" :sto_id="sto_id"/>
  </div>
</template>

<script>
import StavkaRacuna from './StavkaRacuna.vue'
import MeniRacun from './MeniRacun.vue'
export default {
    props:['data','sto_id'],
    components:{
        StavkaRacuna,
        MeniRacun
    },
    data(){
        return{
            racunMeni: false
        }
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        background: #ddd;
        border: 1px solid black;
        transition: 0.5s ease-in-out;
    }
    button{
        width: 10%;
        float: right;
    }
</style>