<template>
	<div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]" :style="{paddingLeft: gutter/2+'px', paddingRight: gutter/2+'px'}">
		<div style="border: 1px solid;height: 100px;">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			span: {
				type: [Number, String]
			},
			offset: {
				type: [Number, String]
			}
		},
		data() {
			return {
				gutter: 0
			}
		},
	}
</script>

<style scoped="scoped" lang="scss">
	.col {
		width: 50%;

		$class-prefix: col-;

		@for $n from 1 to 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n/24)*100%;
			}
		}

		$class-prefix: offset-;

		@for $n from 1 to 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n/24)*100%;
			}
		}

	}
</style>
