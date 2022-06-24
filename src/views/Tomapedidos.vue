<template>
    <div>
        <Infocliente/>
        <Saborpasteles/>
        <img src="../assets/betun.png" class="betun">
        <img src="../assets/betun.png" class="betun2">
        <img src="../assets/betun.png" class="betun3">
        <img src="../assets/betun.png" class="betun4">
        <img src="../assets/betun.png" class="betun5">
        <img src="../assets/betun.png" class="betun6">
        <img src="../assets/betun.png" class="betun7">
        <img src="../assets/betun.png" class="betun8">
        <img src="../assets/betun.png" class="betun9">
        <img src="../assets/betun.png" class="betun10">
        <img src="../assets/betun.png" class="betun11">
        <img src="../assets/betun.png" class="betun12">
        <img src="../assets/betun.png" class="betun13">
        <img src="../assets/betun.png" class="betun14">
        <img src="../assets/betun.png" class="betun15">
        <img src="../assets/betun.png" class="betun16">
        <img src="../assets/betun.png" class="betun17">
        <img src="../assets/betun.png" class="betun18">
        <img src="../assets/betun.png" class="betun19">
        <img src="../assets/betun.png" class="betun20">
        <img src="../assets/betun.png" class="betun21">
        <img src="../assets/betun.png" class="betun22">
        <img src="../assets/betun.png" class="betun23">
        
        <button class="button1" @click="$store.commit('Enviarpedido')">Enviar pedido</button>
    </div>
</template>
<script>
import Infocliente from '../components/Infocliente.vue'
import Saborpasteles from '../components/Saborpasteles.vue'

export default {
    name: "Tomapedidos",
    components:{
        Infocliente,
        Saborpasteles
    }
    
}
</script>
<style>
body{
    background-color: rgb(223, 223, 223) ;
}
.betun{
    height: 200px;
    position: absolute;
    top: 50px;
    left: 440px;
    mask-repeat:repeat;
}
.betun2{
    height: 200px;
    position: absolute;
    top: 50px;
    left: 600px;
    mask-repeat:repeat;
}
.betun3{
    height: 200px;
    position: absolute;
    top: 200px;
    left: 600px;
    mask-repeat:repeat;
}
.betun4{
    height: 200px;
    position: absolute;
    top: 350px;
    left: 600px;
    mask-repeat:repeat;
}
.betun5{
    height: 200px;
    position: absolute;
    top: 500px;
    left: 600px;
    mask-repeat:repeat;
}
.betun6{
    height: 200px;
    position: absolute;
    top: 650px;
    left: 600px;
    mask-repeat:repeat;
}
.betun7{
    height: 200px;
    position: absolute;
    top: 800px;
    left: 600px;
    mask-repeat:repeat;
}
.betun8{
    height: 200px;
    position: absolute;
    top: 950px;
    left: 600px;
    mask-repeat:repeat;
}
.betun9{
    height: 200px;
    position: absolute;
    top: 1100px;
    left: 600px;
    mask-repeat:repeat;
}
.betun10{
    height: 200px;
    position: absolute;
    top: 1250px;
    left: 600px;
    mask-repeat:repeat;
}
.betun11{
    height: 200px;
    position: absolute;
    top: 1400px;
    left: 600px;
    mask-repeat:repeat;
}
.betun12{
    height: 200px;
    position: absolute;
    top: 1550px;
    left: 600px;
    mask-repeat:repeat;
}
.betun13{
    height: 200px;
    position: absolute;
    top: 1700px;
    left: 600px;
    mask-repeat:repeat;
}
.betun14{
    height: 200px;
    position: absolute;
    top: 1850px;
    left: 600px;
    mask-repeat:repeat;
}
.betun15{
    height: 200px;
    position: absolute;
    top: 2000px;
    left: 600px;
    mask-repeat:repeat;
}
.betun16{
    height: 200px;
    position: absolute;
    top: 2150px;
    left: 600px;
    mask-repeat:repeat;
}
.betun17{
    height: 200px;
    position: absolute;
    top: 2300px;
    left: 600px;
    mask-repeat:repeat;
}
.betun18{
    height: 200px;
    position: absolute;
    top: 2450px;
    left: 600px;
    mask-repeat:repeat;
}
.betun19{
    height: 200px;
    position: absolute;
    top: 2600px;
    left: 600px;
    mask-repeat:repeat;
}
.betun20{
    height: 200px;
    position: absolute;
    top: 2750px;
    left: 600px;
    mask-repeat:repeat;
}
.betun21{
    height: 200px;
    position: absolute;
    top: 2900px;
    left: 600px;
    mask-repeat:repeat;
}
.betun22{
    height: 200px;
    position: absolute;
    top: 3050px;
    left: 600px;
    mask-repeat:repeat;
}
.betun23{
    height: 200px;
    position: absolute;
    top: 3050px;
    left: 440px;
    mask-repeat:repeat;
}
.button1{
    font-weight: 500;
    font-family: 'Franklin';
    background-color:#6DD47E ;
    color: #293250;
    text-justify: distribute;
    position: absolute;
    top: 3200px;
    left: 100px;
    height: 30px;

}


</style>







