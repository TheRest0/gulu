<template>
	<svg aria-hidden="true">
		<use :xlink:href="`#i-${name}`"></use>
	</svg>
</template>

<script>
	export default{
		props:['name']
	}
</script>

<style>
</style>
