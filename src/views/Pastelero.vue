<template>
   <div>
       <Cantidadsabores/>
       <Vistapedido/>
   </div>
</template>

<script>
import Cantidadsabores from '../components/Cantidadsabores.vue'
import Vistapedido from '../components/Vistapedido.vue'

export default {
    name: "Pastelero",
    components:{
        Cantidadsabores,
        Vistapedido
    }
}
</script>
<style>
</style>