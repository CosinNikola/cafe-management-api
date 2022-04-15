<template>
  <div class="proizvod">
      <h4>{{data.naziv}}</h4>
      <h4>{{data.cena}} din</h4>
  </div>
</template>

<script>
export default {
    props:['data'],
}
</script>

<style>
    .proizvod{
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 15%;
        box-shadow: 0px 0px 4px gray;
        padding: 5px;
        text-align: center;
    }
</style>