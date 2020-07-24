<template>
  <div id="app">
		<g-row gutter='20'>
			<g-col span='6'>1</g-col>
			<g-col span='6' offset='4'>2</g-col>
			<g-col span='6' offset='2'>3</g-col>
		</g-row>
		<g-row>
			<g-col span='2'>1</g-col>
			<g-col span='22'>2</g-col>
		</g-row>
		<g-row>
			<g-col span='4'>1</g-col>
			<g-col span='18' offset='2'>2</g-col>
		</g-row>
		
		
		<div class="box">
			<g-button icon="down" icon-position="right" :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
			<g-button icon="left" icon-position="left" :loading="loading2" @click="loading2 = !loading2">按钮</g-button>
			<g-button icon="setting" >按钮</g-button>
			<g-button>按钮</g-button>
			
			<g-button-group>
				<g-button icon="left" icon-position="left">上一页</g-button>
				<g-button>按钮</g-button>
				<g-button icon="right" icon-position="right">下一页</g-button>
			</g-button-group>
		</div>
		
		
		<div class="box">
			<g-input v-model="value"></g-input>
			<p>{{value}}</p>
			<button @click="value +=1">+1</button>
		</div>
		<!-- <div id="test"></div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
	data(){
		return{
			loading1:true,
			loading2:false,
			value:'111'
		}
	},
	created() {
		console.log(this)
	}
}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 20px;
		
		> .g-button{
			margin-right: 10px;
		}
	}
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:root {
		--button-height: 32px;
		--font-size: 14px;
		--button-bg: white;
		--button-active-bg: #eee;
		--border-radius: 4px;
		--color: #333;
		--border-color: #999;
		--border-color-hover: #666;
	}
	.icon {
		width: 1em; height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
</style>
<style scoped="scoped" lang="scss">
	.box{
		margin-top: 50px;
	}
	
</style>
