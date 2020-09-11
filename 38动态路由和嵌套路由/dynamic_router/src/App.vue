<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
	  	  <router-link to="/about">about</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
	export default{
		// 监听事件,监听路由变化
		watch:{
			'$route':function(val){
				console.log('路由发现变化')
			}
		}
	}
</script>

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
