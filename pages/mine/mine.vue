<template>
	<view class="content">
		<view :style="{height: `${statusBarHeight}px`}"></view>
		<view class="aa">
			我的
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:this.$statusBarHeight
			}
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style>
	
</style>

