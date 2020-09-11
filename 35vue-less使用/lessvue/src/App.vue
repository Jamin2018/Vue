<template>
  <div id="app">
    <AlertCom v-if="isAlert" :title="title" :content="content" :cancelEvent="cancelEvent" :comfirmEvent="comfirmEvent"></AlertCom>
  </div>
</template>

<script>
import AlertCom from './components/Alert.vue'

export default {
  name: 'App',
  components: {
    AlertCom
  },
  data(){
	  return{
		  title:"温馨提示",
		  content:"是否跳转到百度",
		  isAlert:true
	  }
  },
  methods:{
  	cancelEvent:function(){
  		this.isAlert = false
  	},
  	comfirmEvent:function(){
  		location.href = "http://www.baidu.com"
  	}
  }
}
</script>

<style lang="less">
* {
	margin: 0;
	padding: 0;
}
</style>
