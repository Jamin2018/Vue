<template>
	<div class="alert">
		<div class="zhezhao">
			<div class="alertMain">
				<div class="title">
					{{title}}
				</div>
				<div class="content">
					{{content}}
				</div>
				<div class="btnList">
					<div @click="cancelEvent" class="btn cancel">取消</div>
					<div @click="comfirmEvent" class="btn comfirm">确认</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:["title", "content", "cancelEvent", "comfirmEvent"]

	}
</script>

<style lang="less">
	@theme-color:orange;
	@default-size:18px;
	@font-color:#fff;
	@zheZhaoOpacity:0.6;
	
	.fullScreen(){
		width: 100vw;
		height: 100vh;
		display: flex;
	}
	
	.defaultPadding(){
		padding: 10px;
		
	}
	
	.btnStyle(@padding:20px){
		padding: @padding;
		text-align: center;
		
		
		
	}
	
	.alert{
		.fullScreen();
		.zhezhao{
			.fullScreen();
			background:rgba(0,0,0,@zheZhaoOpacity);
			justify-content: center;
			align-items: center;
		}
		.alertMain{
			width: 600px;
			height: 400px;
			background: #fff;
			display: flex;
			flex-direction: column;
			position: relative;
			.title{
				font-size: @default-size;
				height: 50px;
				background: @theme-color;
				color: @font-color;
				.defaultPadding();
				text-align: left;
				line-height: 50px;
				font-weight: 900;
			}
			.content{
				.defaultPadding();
				font-size: @default-size;
				
			}
			.btnList{
				position: absolute;
				left: 0;
				bottom: 0;
				display: flex;
				width: 100%;
			}
			
			.btn{
				.btnStyle();
				width: 50%;
			}
			.cancel{
				background: pink;
				color: @font-color;
			}
			.comfirm{
				background: greenyellow;
				color: @font-color;
			}
		}
		
	}
	
</style>
