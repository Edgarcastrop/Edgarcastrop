<template>
  <nav>
    <router-link to="/">Catalogo</router-link> |
    <router-link to="/about">Acerca de la pasteleria</router-link> | 
    <router-link to="/Tomapedidos">Toma de pedidos</router-link>| 
    <router-link to="/Pastelero">Pastelero</router-link>

    <router-view/>

  </nav>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: rgb(215, 101, 232);
}
</style>
