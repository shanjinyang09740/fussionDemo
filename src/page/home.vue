<template>
	<div>
		<headTop></headTop>
		<div class="home">
			<div class="breadcrumbNav">
				<el-breadcrumb separator="/">
				  <el-breadcrumb-item>首页</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		</div>
	</div>
</template>

<script>
	import HeadTop from '@/components/headTop.vue'
	export default {
		name: 'home',
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
	.breadcrumbNav {
		height: 30px;
		padding: 20px 0 0 20px;
		overflow: hidden;
		.el-breadcrumb__item:last-child .el-breadcrumb__inner {
			color: #409eff;
		}
	}
	
</style>
