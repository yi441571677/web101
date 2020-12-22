<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <My/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import My from './components/My'

export default {
  name: 'App',
  components: {
    HelloWorld,
    My
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: blue;
}
</style>
