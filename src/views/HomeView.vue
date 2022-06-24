<template>
  <div class="home">
    <div><img src="../assets/logopast.png" alt="logopast" class="logo"></div>
    <div class="bienvenida">Bienvenido a pastelerias Naty</div>
    <div class="pasteles"></div>

    <Catalogo/>

  </div>
</template>

<script>
  import Catalogo from '../components/Catalogo.vue'


export default {
  name: 'HomeView',
  components:{
    Catalogo
  }
}
</script>
<style>
body{
  background-color: rgb(227, 135, 58 );
}
.bienvenida{
  font-size: 50px;
  position: absolute;
  top: 100px;
  left: 50px;
  color: rgb(108, 112, 191);
  font-family: Franklin;
}
.logo{
  height: 300px;
  position: absolute;
  top: 200px;
  left: 730px ;

}
</style>
