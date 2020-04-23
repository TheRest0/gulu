<template>
  <div id="app">
		<g-button icon="down" icon-position="right">按钮</g-button>
		<g-button icon="left" icon-position="left">按钮</g-button>
		<g-button icon="setting" >按钮</g-button>
		<g-button>按钮</g-button>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 20px;
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
