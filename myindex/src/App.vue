<template>
	<div class="main">
		<div class="main-container">
			<div class="header">
				<h1 @click="goIndex()">金博文的个人网站</h1>
				<p>Jin Bowen's Personal Website</p>
			</div>
			<div class="content">
				<p class="content-p" @mouseover="addActive($event)" @mouseout="removeActive($event)">
					<span @click="goBlog()">我的博客</span>
				</p>
				<p class="content-p" @mouseover="addActive($event)" @mouseout="removeActive($event)">
					<span @click="goGithub()">我的github</span>
				</p>
				<p class="content-p" @mouseover="addActive($event)" @mouseout="removeActive($event)">
					<span @click="goElm()">项目浏览</span>
				</p>
			</div>
			<div class="footer">
				<p class="website">jinbowen.cn</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			active: '',
		}
	},
	methods: {
		addActive($event) {
			$event.currentTarget.className = 'content-p active'
		},
		removeActive($event) {
			$event.currentTarget.className = 'content-p'
		},
		goBlog() {
			window.open('https://blog.csdn.net/katr1na', '_blank')
		},
		goGithub() {
			window.open('https://github.com/jin-hub', '_blank')
		},
		goElm() {
			window.open('http://jinbowen.cn/elm', '_blank')
		},
		goIndex() {
			window.open('http://jinbowen.cn', '_self')
		},
	},
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
/*包含以下四种的链接*/
span {
	cursor: pointer;
}

html {
	width: 100%;
	height: 100%;
}
.main {
	position: fixed;
	padding: 0;
	margin: 0;
	background: url('../src/assets/cat.jpg');
	background-size: cover;
	-webkit-background-size: cover;
	-o-background-size: cover;
	height: 100%;
	width: 100%;
}
.main-container {
	background-color: rgba(0, 0, 0, 0.3);
	color: white;
	border-radius: 30px;
	text-align: center;
	position: absolute;
	left: 50%;
	top: 50%;
	width: 20rem;
	height: 350px;
	margin-left: -10rem;
	margin-top: -10rem;
	opacity: 0.9;
}
.header {
	margin-top: 5%;
	font-family: Georgia, serif;
}
.main-container .header p {
	font-size: 16px;
	line-height: 220%;
	color: #fefefe;
	text-shadow: 0 1px 1px #333;
	border-bottom: 1px solid #d3d3d3;
}
.main-container .header h1 {
	font-size: 22px;
	line-height: 90%;
	color: #fefefe;
	padding-top: 0.4rem;
	text-align: center;
	font-weight: bolder;
	text-shadow: 0 1px 1px #333;
	cursor: pointer;
}
.content-p {
	text-align: left;
	background-color: rgba(0, 0, 0, 0.5);
	width: 90%;
	margin: 25px auto;
	padding: 5px;
	color: #fefefe;
	text-shadow: 0 1px 1px #333;
	line-height: 200%;
	border-radius: 30px;
}
.content p a {
	color: #fefefe;
	text-decoration: none;
}
.active {
	background-color: white;
	color: black;
}
.footer {
	border-top: 1px solid #d3d3d3;
}
.website {
	text-align: right;
	position: relative;
	right: 10px;
	top: 8px;
}
</style>
