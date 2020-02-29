<template>
	<view class="">
		
		<uni-list>
		    <uni-list-item title="2019东京" note="描述信息"></uni-list-item>
		    <uni-list-item title="2018济州岛" note="描述信息"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import {uniList,uniListItem} from '@dcloudio/uni-ui'
	
	export default {
		components: {uniList,uniListItem},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
</style>
