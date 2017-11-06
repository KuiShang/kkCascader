<template>
  <div id="app">
    
   		<label for="dist">收货地址</label>
       <kkcascader></kkcascader>
       123
	
  </div>
</template>

<script>
// import distPicker from './kkCascader.vue'
export default {
  name: 'app',
  // components: {
  //   'dist-picker': distPicker
  // },
  methods: {
    change(id , value) {
      console.log('父亲组件得到的值')
      console.log(id, value)
    }
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
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
