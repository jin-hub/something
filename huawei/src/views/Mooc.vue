<template>
	<div>
		<Nav class="nav" />
		<div class="container">
			<div class="bgpic">
				<div class="titletext">
					<div class="text1">MOOC课程</div>
					<div class="text2">面向师生提供丰富的自学开放课程，轻松实现自我提升。</div>
				</div>
			</div>

			<div class="course-content">
				<div class="clearfix border">
					<div class="uldiv">
						<el-tabs>
							<el-tab-pane label="热门课程"></el-tab-pane>
							<el-tab-pane label="热门活动"></el-tab-pane>
							<el-tab-pane label="云课程"></el-tab-pane>
							<el-tab-pane label="角色系列课程"></el-tab-pane>
						</el-tabs>
					</div>
				</div>
				<div class="clearfix mooctop">
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(1)"
						id="1"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>全部</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(2)"
						id="2"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>算法与数据结构</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(3)"
						id="3"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>应用开发</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(4)"
						id="4"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>Android</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(5)"
						id="5"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>区块链</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(6)"
						id="6"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>Java</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(7)"
						id="7"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>软件测试</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(8)"
						id="8"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>Python</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(9)"
						id="9"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>前端</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(10)"
						id="10"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>影视制作</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(11)"
						id="11"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>UI</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(12)"
						id="12"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>产品经理</div>
					<div
						class="couse-fliter"
						@click="typeNow($event),changeColor(13)"
						id="13"
						@mouseover="addActive($event)"
						@mouseout="removeActive($event)"
					>运营</div>
				</div>
				<div class="market-card-box">
					<div class="market-box">
						<Moocbox
							v-for="item in 49"
							:key="item"
							:Moocbox="{
                                index: item,
                                name: moocbox[item-1].name,
                                author: moocbox[item-1].author,
                                type: moocbox[item-1].type,
                                nowType: nowType,
                                school: '华为云',
                            }"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Moocbox from '@/components/Moocbox.vue'
export default {
	name: 'Mooc',
	components: {
		Nav,
		Moocbox,
	},
	data() {
		return {
			activeName: 'first',
			moocbox: [
				{
					name: '三天玩转最优路径算法',
					author: 'Classroom',
					type: '算法与数据结构',
				},
				{
					name: '基于ROMA及AppEngine告警消息分离应用',
					author: 'Classroom',
					type: '应用开发',
				},
				{
					name: '基于AppEngine出差电子流应用开发',
					author: 'Classroom',
					type: '应用开发',
				},
				{
					name: '基于ROMA及AppEngine智慧气象局应用开发',
					author: 'Classroom',
					type: '应用开发',
				},
				{
					name: 'Android核心技术系列之一-初始Android',
					author: '尚硅谷',
					type: 'Android',
				},
				{
					name: 'Android核心技术系列之二-Android基础入门',
					author: '尚硅谷',
					type: 'Android',
				},
				{
					name: 'Android核心技术系列之三-初级Android开发',
					author: '尚硅谷',
					type: 'Android',
				},
				{
					name: 'Android核心技术系列之四-Android进阶',
					author: '尚硅谷',
					type: 'Android',
				},
				{
					name: 'Android核心技术系列之五-Android精通',
					author: '尚硅谷',
					type: 'Android',
				},
				{
					name: '区块链入门',
					author: '博学谷',
					type: '区块链',
				},
				{
					name: '2小时搞懂区块链',
					author: '博学谷',
					type: '区块链',
				},
				{
					name: '区块链精品实践课',
					author: '博学谷',
					type: '区块链',
				},
				{
					name: 'Spring定时任务2布轻松搞定',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: '千万级流量架构优化策略',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: 'Lombok安装及使用教程',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: 'Zookeeper入门与实践',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: '掌握Java常用API提高编程效率',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: '使用Java+POI读写Excel文档',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: '轻松学好多线程，JAVA并发不头疼',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: 'Java“方法学得好，程序代码复用高”',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: '1小时精通Redis哨兵模式',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: '快乐的Java网络编程',
					author: '博学谷',
					type: 'Java',
				},
				{
					name: '软件测试入门-黑马头条项目实战',
					author: '博学谷',
					type: '软件测试',
				},
				{
					name: '从0开始学Python',
					author: '博学谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之前置知识',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之入门',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之运算',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之控制语句',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之模板介绍',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之模板介绍',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之函数和装饰器',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之面向对象',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之模块化与异常',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Python核心系列之文件操作',
					author: '尚硅谷',
					type: 'Python',
				},
				{
					name: 'Jquery瀑布流插件封装',
					author: '博学谷',
					type: '前端',
				},
				{
					name: '前端基础技能HTML入门到进阶',
					author: '博学谷',
					type: '前端',
				},
				{
					name: 'Vue.js基础入门开发',
					author: '博学谷',
					type: '前端',
				},
				{
					name: '揭秘Ajax',
					author: 'Classroom',
					type: '前端',
				},
				{
					name: 'Vue.js全接触系列之Vue基础',
					author: '尚硅谷',
					type: '前端',
				},
				{
					name: 'Vue.js全接触系列之Vue项目与案例',
					author: '尚硅谷',
					type: '前端',
				},
				{
					name: 'Vue.js全接触系列之Vue路由及源码分析',
					author: '尚硅谷',
					type: '前端',
				},
				{
					name: 'Vue.js全接触系列之Vue_vuex详解',
					author: '尚硅谷',
					type: '前端',
				},
				{
					name: 'Node.js指南系列之Node简介',
					author: '尚硅谷',
					type: '前端',
				},
				{
					name: 'Node.js指南系列之Node NPM',
					author: '尚硅谷',
					type: '前端',
				},
				{
					name: 'Node.js指南系列之Node文件操作',
					author: '尚硅谷',
					type: '前端',
				},
				{
					name: '剪辑大神50招',
					author: '博学谷',
					type: '影视制作',
				},
				{
					name: 'UI入门-商业广告设计实战视频',
					author: '博学谷',
					type: 'UI',
				},
				{
					name: 'Axure基础课',
					author: '博学谷',
					type: '产品经理',
				},
				{
					name: '自媒体运营套路大揭底，带你轻松做爆文上线',
					author: '博学谷',
					type: '运营',
				},
			],
			nowType: '',
			right: true,
			// show: ,
		}
	},

	methods: {
		typeNow: function ($event) {
			this.nowType = $event.target.innerText
			console.log('父组件此时this.nowType的值是' + this.nowType)
		},
		addActive($event) {
			$event.currentTarget.className = 'couse-fliter couse-active'
		},
		removeActive($event) {
			$event.currentTarget.className = 'couse-fliter'
		},
		changeColor(a) {
			var bta = document.getElementById(a)
			bta.style.color = '#5e7ce0'
			for (var b = 1; b <= 13; b++) {
				if (b != a) {
					var bta1 = document.getElementById(b)
					bta1.style.color = '#5e6678'
				}
			}
		},
	},
}
</script>

<style>
ol,
p,
ul {
	margin: 0;
	list-style: none;
	padding: 0;
}

.clearfix {
	clear: both;
}
.nav {
	z-index: 10000;
	position: fixed;
}
.course-content {
	position: relative;
	min-height: 40px;
	width: 1400px;
	margin: 23px auto 0;
}
.couse-fliter {
	font-size: 14px;
	text-align: center;
	line-height: 24px;
	height: 24px;
	padding: 0 10px;
	background: #f6f7fa;
	border-radius: 12px;
	margin: 30px 10px 5px 10px;
	color: #5e6678;
	letter-spacing: 0;
	float: left;
	cursor: pointer;
}
.el-tabs__item {
	font-size: 14px !important;
	font-weight: 700 !important;
}
.titletext {
	color: #ffffff;
	width: 1400px;
	margin: 0 auto;
	height: 100%;
}
.uldiv {
	margin-top: 100px;
	font-size: 16px;
	background: 0 0;
	font-weight: 700;
}
.titletext .text1 {
	font-size: 30px;
	color: #fff;
	padding: 40px 0 20px;
}
.titletext .text2 {
	font-size: 16px;
	color: #fff;
	letter-spacing: 0.11px;
	line-height: 24px;
}

.container {
	position: relative;
	width: 100%;
	/* --swiper-navigation-size: 44px; */
}

.market-card-box {
	padding-bottom: 60px;
	margin-top: 20px;
	width: 1400px;
}
.market-box {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}

ul li {
	float: left;
	margin-left: 32px;
	cursor: pointer;
	border: 2px solid transparent;
}
.bgpic {
	height: 180px;
	background: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/course-bg.c21684352de65d13ddec.png);
	background-position-y: -180px;
	position: relative;
	top: 60px;
	/* background-size: cover; */
	width: 100%;
	/* background-repeat: no-repeat; */
}
.couse-active {
	color: #5e7ce0;
}
</style>
