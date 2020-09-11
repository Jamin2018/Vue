<template>
	<div>
		<h1>城市：{{ city }}</h1>
		<h1>天气：{{tianqi}}</h1>
		<h1>摄氏度：{{info}}</h1>
		      <router-link to="/">进入主页面</router-link>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default{
		data(){
			
			return{
				city:null,
				tianqi:null,
				info:null,
				
			}

		},
		async beforeMount() {
			let searchCity = this.$route.params.city
			let HttpUrl =
				`https://free-api.heweather.net/s6/weather/now?location=${searchCity}&key=731c24e56e1e4424b9f651156411a9bd`
			try{
				let res = await axios.get(HttpUrl)
				let data = res.data
				this.city = data.HeWeather6[0].basic.location
				this.tianqi = data.HeWeather6[0].now.cond_txt
				this.info = data.HeWeather6[0].now.fl
			} catch{
				console.log('天气数据请求失败')
			}
			

			
		}
	}
</script>

<style>
</style>
