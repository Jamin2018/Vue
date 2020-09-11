<template>
	<div>
		<h1>个人中心</h1>
		<button @click="goAbout">按钮</button>
	</div>
</template>

<script>
	export default{
		
		methods:{
			goAbout:function(event){
				this.$router.push({ path: '/' })
			}
		}
	}
</script>

<style>
</style>
