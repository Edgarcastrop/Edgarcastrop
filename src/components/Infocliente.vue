<template>
        <div class="pedido">                            
            <h1 class="title">Informacion del cliente</h1>
            <div class="cliente"></div>
                <div>
                    <p class="nombre">Nombre</p>
                    <p class="apellidos">Apellidos</p>
                    <p class="titlecorreo">Correo electronico</p>
                    <p class="tel">Numero de telefono</p>


                    <form>
                        <input type="text" class="input" placeholder="Nombres" v-model="Numeroinsertadohijo">
                        <input type="text" class="input2" placeholder="Apellidos">

                        <h2 class="titlesucu">Sucursal a la que quieras ordenar el pastel</h2>
                        <select class="sucursales">
                            <option value="Select">Select</option>
                            <option>Teresa Villegas 1090, Desarrollo Urbano Tres Ríos, 80030 Culiacán Rosales, Sin.</option>
                            <option>Plaza Fiesta, Loc. 1-C, De Los Insurgentes 970, Centro Sinaloa, 80200 Culiacán Rosales, Sin.</option>
                            <option>Av Revolución 903, Guadalupe Victoria, 80240 Culiacán Rosales, Sin.</option>
                        </select>
                        <input type="email" name="correo" id="correo" class="correo" placeholder="ejemplo@gmail.com" >
                        <input type="tel" name="telefono" id="telefono" class="numerotel" maxlength="10">
                        
                        <div>
                            <button class="button1" type="submit">Enviar</button>
                        </div>
                    </form>
                    <button @click="Enviarinfo"></button>
                </div>
        </div>
</template>
<script>
export default {
    name: "Infocliente",
    data(){
        return{
        Numeroinsertadohijo:null
        }
    },
    methods:{
        Enviarinfo(){
            this.$emit('escucharhijo', this.Numeroinsertadohijo)
        }
    },
}
</script>
<style scoped>
p{
    color: #293250;
}
</style>
<style>
body{
    background-color: rgb(255, 255, 255);
}
.pedido{
    background-color: #FFD55A;
    width: 900px;
    height: 3200px;

}
.cliente{
    background-color: #6DD47E;
    height: 400px;
    width: 490px;
    position: absolute;
    top: 140px;
    left: 80px;

}
.title{
    font-size: 30px;
    font-family: Franklin;
    font-weight: 600;
}
.nombre{
    font-size: 20px;
    font-family: Franklin;
    position: absolute;
    top: 130px;
    left: 90px;
}
.apellidos{
    font-size: 20px;
    font-family: Franklin;
    position: absolute;
    top: 210px;
    left: 90px;
}
.input{
    height: 15px;
    width: 400px;
    background-color: rgb(199, 199, 199);
    position: absolute;
    top: 190px;
    left: 90px;
    border-block-color: rgb(2, 3, 17);
    border-block-start-color: black;
}
.input2{
    height: 15px;
    width: 400px;
    background-color: rgb(199, 199, 199);
    position: absolute;
    top: 260px;
    left: 90px;
    border-block-color: rgb(2, 3, 17);
    border-block-start-color: black;
}

.titlesucu{
    font-size: 20px;
    font-family: Franklin;
    position: absolute;
    top: 280px;
    left: 90px;
}
.sucursales{
    height: 20px;
    width: 400px;
    background-color: rgb(199, 199, 199);
    position: absolute;
    top: 330px;
    left: 90px;
    border-block-color: rgb(2, 3, 17);
    border-block-start-color: black;
}
.titlecorreo{
    font-size: 20px;
    font-family: Franklin;
    position: absolute;
    top: 340px;
    left: 90px;
}
.correo{
    height: 20px;
    width: 400px;
    background-color: rgb(199, 199, 199);
    position: absolute;
    top: 400px;
    left: 90px;
    border-block-color: rgb(2, 3, 17);
    border-block-start-color: black;
}
.tel{
    font-size: 20px;
    font-family: Franklin;
    position: absolute;
    top: 420px;
    left: 90px;
}
.numerotel{
    height: 20px;
    width: 400px;
    background-color: rgb(199, 199, 199);
    position: absolute;
    top: 480px;
    left: 90px;
    border-block-color: rgb(2, 3, 17);
    border-block-start-color: black;
}
</style>