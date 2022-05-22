<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="text-end"> México en llamas</h1>
      <IndexScreen></IndexScreen>
    </div>
  </div>
  
  
</template>

<script>

import IndexScreen from './components/Index.vue'


export default {
  name: 'App',
  components: {
    IndexScreen
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
  #app{
    background-color: #e36414;
    height: 100vh;
  }
  h1{
    font-family: 'Michroma', sans-serif;
    font-size: 9rem !important;
  }
</style>
