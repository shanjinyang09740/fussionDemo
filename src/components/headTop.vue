<template>
	<div class="header">
		<div class="sysName">基础数据库管理系统</div>
		<el-menu class="el-menu-head" :default-active="activeIndex" mode="horizontal" @select="handleSelect"
		 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<headMenu :headMenus="headMenuData"></headMenu>
		</el-menu>
		<div class="adminInfo">
			<el-dropdown @command="handleCommand">
				<i class="el-icon-s-custom"></i>
				<span class="currentUser">admin</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="home">首页</el-dropdown-item>
					<el-dropdown-item command="signout">退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	import HeadMenu from '@/components/headMenu'
	export default {
		components: {
			HeadMenu
		},
		data() {
			return {
				activeIndex: 'home',
				headMenuData: [{
						//一级
						entity: {
							id: 10,
							index: 1,
							name: "home",
							alias: "首页",
							value: ""
						}
					},
					{
						//一级
						entity: {
							id: 20,
							index: 2,
							name: "ysj",
							alias: "元数据",
							value: ""
						}
					},
					{
						//一级
						entity: {
							id: 30,
							index: 3,
							name: "sjcj",
							alias: "数据采集",
							value: ""
						}
					},
					{
						//一级
						entity: {
							id: 40,
							index: 4,
							name: "sjzh",
							alias: "数据整合",
							value: ""
						}
					},
					{
						//一级
						entity: {
							id: 50,
							index: 5,
							name: "sjgl",
							alias: "数据管理",
							value: ""
						}
					},
					{
						//一级
						entity: {
							id: 60,
							index: 6,
							name: "yhgl",
							alias: "用户管理",
							value: ""
						}
					}
				]
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			async handleCommand(command) {
				if (command == 'home') {
					this.$router.push('/manage');
				} else if (command == 'signout') {
					const res = {
						status: 1
					};
					if (res.status == 1) {
						this.$message({
							type: 'success',
							message: '退出成功'
						});
						this.$router.push('/');
					} else {
						this.$message({
							type: 'error',
							message: res.message
						});
					}
				}
			},
		}
	}
</script>
<style lang="less">
	.header {
		height: 56px;
		background-color: #545c64;
		position: relative;
		
		.sysName {
			line-height: 56px;
			font-size: 22px;
			font-family: "Microsoft YaHei";
			color: #e6a23c;
			display: inline-block;
			padding: 0 30px;
			position: absolute;
			left: 0;
		}

		.el-menu-head {
			height: 100%;
			position: absolute;
			left: 360px;
			.el-menu-item {
				float: left;
			}
		}

		.adminInfo {
			position: absolute;
			right: 20px;
			top: 18px;

			.el-dropdown {
				color: #409eff;
				font-size: 16px;
				cursor: pointer;
			}

			.currentUser {
				padding-left: 5px;
				font-size: 14px;
				color: #e4e4e4;
				cursor: default;
			}
		}
	}
</style>
