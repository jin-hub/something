<template>
	<div>
		<div class="nav-container">
			<img
				src="https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/logo.451780fa3b1dcc60e811.svg"
				class="nav-pic"
			/>
			<div class="nav-content">
				<div
					class="content"
					@click="goHome()"
					@mouseover="addActive($event)"
					@mouseout="removeActive($event)"
				>首页</div>
				<div class="content" @mouseover="addActive($event)" @mouseout="removeActive($event)">鲲鹏教育中心</div>
				<div
					class="content"
					@click="goMooc()"
					@mouseover="addActive($event)"
					@mouseout="removeActive($event)"
				>MOOC课程</div>
				<div class="content" @mouseover="addActive($event)" @mouseout="removeActive($event)">培训认证</div>
				<div class="content" @mouseover="addActive($event)" @mouseout="removeActive($event)">在线实验</div>
				<div class="content" @mouseover="addActive($event)" @mouseout="removeActive($event)">教学市场</div>
				<div class="content" @mouseover="addActive($event)" @mouseout="removeActive($event)">新工科实验班</div>
				<div class="content" @mouseover="addActive($event)" @mouseout="removeActive($event)">学习交流</div>
			</div>
			<div class="nav-rightbox">
				<button class="nav-btn">教学平台</button>
				<div class="userinfo">
					<span>登录</span>
					<span>|</span>
					<span>注册</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goMooc() {
			this.$router.push('/Mooc')
		},
		goHome() {
			this.$router.push('/')
		},
		addActive($event) {
			$event.currentTarget.className = 'content nav-active'
		},
		removeActive($event) {
			$event.currentTarget.className = 'content'
		},
	},
}
</script>

<style>
div {
	box-sizing: border-box;
}

.nav-container {
	width: 100%;
	position: fixed;
	background-color: #fff;
	border-bottom: 1px solid #eee;
	height: 60px;
	display: flex;
	padding: 0 40px;
	align-items: center;
}
.userinfo {
	width: 200px;
}
.nav-container .nav-rightbox {
	display: flex;
	margin-left: auto;
	line-height: 59px;
	min-width: 400px;
	height: 100%;
}
.nav-container .nav-content {
	margin-left: 70px;
	cursor: pointer;
	min-width: 1100px;
}
.nav-container .nav-rightbox .nav-btn {
	border-radius: 16px;
	margin-right: 60px;
	margin-top: 18px;
	padding: 4px 20px;
	font-size: 14px;
	color: #293040;
	background: #fafafa;
	border: 1px solid #e3e5e9;
	box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
	height: 32px;
	line-height: 20px;
	transition: 0.2s;
}
.nav-container .nav-rightbox .el-icon-question {
	position: relative;
	min-width: 40px;
	padding: 0 10px;
	font-weight: 400;
	line-height: 59px;
}
.userinfo span {
	margin-left: 20px;
}
.nav-container .nav-content .content {
	float: left;
	margin-right: 40px;
	font-size: 1vw;
	color: #293040;
	line-height: 32px;
	cursor: pointer;
}
.nav-container .nav-pic {
	width: 120px;
	height: 40px;
	background-size: 100% 100%;
}
.nav-active{
	color:rgb(136, 136, 252) !important
}
</style>

