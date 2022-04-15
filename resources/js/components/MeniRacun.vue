<template>
  <div class="container">
      <h1>Meni</h1>
      <div v-if="data !== null">
          <StavkaRacunMeni v-for="stavka in stavkeIspis" :key="stavka.id" :data="stavka" @click.native="dodajStavku(stavka.id)" />
      </div>
  </div>
</template>

<script>
import StavkaRacunMeni from './StavkaRacunMeni.vue'
export default {
    components:{
        StavkaRacunMeni,
    },
    data(){
        return{
            stavkeIspis: [],
            stavkePorudzbina: []
        }
    },
    props: ['data', 'sto_id'],
    methods: {
        fetchData(){
            fetch('/api/meni')
            .then(res => res.json())
            .then(data => this.stavkeIspis = data)
            .catch(err => console.log(err));
            },

        dodajStavku(id){
            console.log(this.stavkePorudzbina);
            for(let stavka of this.stavkeIspis){
                if(id === stavka.id){
                    this.stavkePorudzbina.push(stavka);
                }
            }
            const sendingData = {porudzbina: this.stavkePorudzbina};
            fetch('/api/stolovi/update/'+this.sto_id,
                {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendingData)
            })
            .then(res => res.text());   
        },
        test(){
            console.log(this.stavkeIspis);
        }
    },
    mounted(){
        this.fetchData();
    }
}
</script>

<style>

</style>