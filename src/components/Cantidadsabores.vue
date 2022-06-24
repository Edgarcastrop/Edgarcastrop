<template>
    <div>
        <h3>Tenemos una cantidad de {{$store.state.harina}}Kg de harina</h3>
        <h3>Tenemos una cantidad de {{$store.state.Azucar}}Kg de azucar </h3>
        <h3>Tenemos una cantidad de {{$store.state.Leche}}L de Leche </h3>
        <h3>Tenemos una cantidad de {{$store.state.Levadura}}Kg de Levadura </h3>
        <h3>Tenemos una cantidad de {{$store.state.Mantequilla}}Kg de mantequilla </h3>
        <h3>Tenemos una cantidad de {{$store.state.Chocolate}}Kg de Chocolate </h3>

    </div>
</template>
<script>
export default {
    name: "Cantidadsabores"
}
</script>