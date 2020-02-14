<template>
	<div>
		<el-menu @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router style="min-height:100vh;width:230px;float: left;">
			<NavMenu :navMenus="menuData"></NavMenu>
		</el-menu>
		<router-view style="margin-left:235px;"></router-view>
	</div>
</template>

<script>
	import NavMenu from "@/components/NavMenu.vue";
	export default {
		components: {
			NavMenu: NavMenu
		},
		data() {
			return {
				menuData: [{
						//一级
						entity: {
							id: 10,
							name: "ysj",
							icon: "el-icon-sold-out\r\n",
							alias: "元数据",
							value: "/page/ysj"
						}
					},
					{
						//一级
						entity: {
							id: 20,
							name: "systemManage",
							icon: "el-icon-message",
							alias: "数据采集"
						},
						//二级
						childs: [{
								entity: {
									id: 3,
									name: "sjtb",
									icon: "el-icon-loading",
									alias: "数据填报",
									value: "/page/sjtb"
								}
							},
							{
								entity: {
									id: 4,
									name: "sjjz",
									icon: "el-icon-bell",
									alias: "数据加载",
									value: "/page/sjjz"
								}
							}
						]
					},
					{
						//一级
						entity: {
							id: 30,
							name: "sjzh",
							icon: "el-icon-news",
							alias: "数据整合"
						},
						//二级
						childs: [{
							entity: {
								id: 7,
								name: "sjsc",
								icon: "el-icon-phone-outline\r\n",
								alias: "数据上传",
							},
							//三级
							childs: [{
									entity: {
										id: 14,
										name: "sjfx",
										icon: "el-icon-sold-out\r\n",
										alias: "数据分析",
										value: "/page/sjfx"
									}
								},
								{
									entity: {
										id: 13,
										name: "sjzl",
										icon: "el-icon-service\r\n",
										alias: "数据整理",
										value: "/page/sjzl"
									}
								}
							]
						}, ]
					},
					{
						//一级
						entity: {
							id: 40,
							name: "sjgl",
							icon: "el-icon-rank",
							alias: "数据管理"
						},
						//er级
						childs: [{
							entity: {
								id: 41,
								name: "sjsh",
								icon: "el-icon-printer",
								alias: "数据审核"
							},
							//三级
							childs: [{
								entity: {
									id: 42,
									name: "sjfb",
									icon: "el-icon-printer",
									alias: "数据发布"
								},
								//四级
								childs: [{
									entity: {
										id: 43,
										name: "fxbgFb",
										icon: "el-icon-printer",
										alias: "分析报告发布",
										value: "/page/fxbgfb"
									}
								}]
							}]
						}]
					},
					{
						//一级
						entity: {
							id: 50,
							name: "yhgl",
							icon: "el-icon-printer",
							alias: "用户管理",
							value: "/page/yhgl"
						}
					}
				],

			};
		},
		mounted() {
			console.log(window.location.href)
			let start = window.location.href.lastIndexOf('/');
			let path = window.location.href.slice(start + 1);
			this.activeIndex = path;

			console.log(this.activeIndex)
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}

	};
</script>

<style lang="less">
	body {
		margin: 0;
	}
</style>
