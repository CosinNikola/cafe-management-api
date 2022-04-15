<template>
  <div class="container">
      <label for="">Naziv proizvoda</label>
      <input type="text" v-model="naziv">
      <label for="">Cena proizvoda</label>
      <input type="number" v-model="cena">
      <button @click="addProizvod">Dodaj proizvod</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            naziv: "",
            cena: 0
        }
    },
    methods:{
        addProizvod(){
            let data = {naziv: this.naziv, cena: this.cena};
            fetch('/api/meni/create', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => console.log('Success', data))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
    .container{
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 15%;
        margin-bottom: 50px;
    }
    button{
        margin-top: 10px;
    }
</style>