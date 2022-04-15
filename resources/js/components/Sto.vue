<template>
<div class="container">
  <div class="table" :class="{taken: data.porudzbina !== null, free: data.porudzbina === null}" @click="racun = !racun">
      <h1>{{data.broj_stola}}</h1>
  </div>
      <Racun v-if="racun" :data="data.porudzbina" :sto_id="data.id"/>
</div>
</template>

<script>
import Racun from './Racun.vue'
export default {
    name: "Sto",
    props: ['data'],
    components: {
        Racun
    },
    data(){
        return {
            racun: false
        }
    }

}
</script>

<style scoped>
    .table{
        text-align: center;
        padding: 30px 15px;
        width: 100%;
        cursor:pointer;
    }
    .taken{
        border: 1px solid crimson;
        background-color: rgba(237, 75, 67, 0.8)
    }
    .free{
        border: 1px solid green;
        background-color: rgba(77, 232, 145, 0.8);
    }
    .container{
        min-width: 25%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>