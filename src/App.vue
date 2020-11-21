<template>
  <div id="app">
    <h1 class="bg-dark text-white">Hackaton 16 - Por Eduardo Rodríguez</h1>
    <div id="nav">
      <router-link to="/">Preguntas</router-link> |
      <router-link to="/listado">Usuarios</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
