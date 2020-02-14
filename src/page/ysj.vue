<template>
	<div>
		<headTop></headTop>
		<div class="home">
			<div class="breadcrumbNav">
				<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
				  <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
	</div>
</template>

<script>
	import HeadTop from '@/components/headTop.vue'
	export default {
		name: 'ysj',
		components: {
			HeadTop
		},
		data() {
			return {}
		},
		mounted() {
			
		},
		computed: {
			
		},
		methods: {
			
		}
	}
</script>
<style lang="less">
	
</style>
