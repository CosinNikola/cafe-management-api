<template>
  <div class="stavka">
      <h6>{{data.naziv}}</h6>
      <h5>{{data.cena}}din</h5>
  </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style scoped>
    .stavka{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        border: 1px solid gray;
        margin: 5px 0;
        cursor:pointer;
    }
</style>