<template>
     <div>
        <div class="tabladatos">
            <table class="default" border="1">
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Correo Electronico</th>
                    <th>Sucursal</th>
                </tr>
                <tr>
                    <td>{{variablerecibida}} </td>
                </tr>
            </table>
            <Saborpasteles @escucharhijo = "variablehijo"></Saborpasteles>
            
        </div>
            
    </div>
</template>
<script>
import Saborpasteles from './Saborpasteles.vue'
export default {
    name: "Vistapedido",
    data(){
        return{
            variablerecibida:null
        }

    },

  components: { 
      Saborpasteles 
    },
    variablehijo(value){
        this.variablerecibida = value;
    },
}
</script>
<style scoped>
th{
    letter-spacing: 1px;
}
tbody td{
    text-align: center;
}
</style>