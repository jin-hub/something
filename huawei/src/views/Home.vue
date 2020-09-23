<template>
	<div class="home">
		<Nav class="nav" />
		<div class="block">
			<el-carousel trigger="click" height="550px">
				<el-carousel-item v-for="item in imglist" :key="item">
					<img :src="item" />
				</el-carousel-item>
			</el-carousel>
			<div class="main-layout">
				<div class="startbox">
					<div class="leftcontent">{{leftcontent}}</div>
					<div>
						<button class="rightbtn">开始上课</button>
					</div>
				</div>
				<div class="midbox">
					<h3>云课堂</h3>
					<span>免费精品公开课，覆盖丰富知识点、课件与在线习题</span>
				</div>
				<Mainbox
					class="mainbox"
					v-for="item in 6"
					:key="item"
					:message="{
			index:item,
			cardname:cardMessage[item-1].cardname,
			time:cardMessage[item-1].time,
			text:cardMessage[item-1].text,
			isfree:cardMessage[item-1].isfree,
			author:cardMessage[item-1].author,
			school:cardMessage[item-1].school
		}"
				/>
				<div class="middiv">
					<button class="midbtn">查看更多></button>
				</div>
			</div>
			<div class="market-layout">
				<div class="marketbox">
					<div class="midbox">
						<h3>教学市场</h3>
						<span>丰富教学资源辅助高校教学，免费习题库一键获取</span>
					</div>
					<Mainbox
						class="mainbox"
						v-for="item in [7,8,9,10,11,12]"
						:key="item"
						:message="{
			index:item,
			cardname:cardMessage[item-1].cardname,
			time:cardMessage[item-1].time,
			text:cardMessage[item-1].text,
			isfree:cardMessage[item-1].isfree,
			author:cardMessage[item-1].author,
			school:cardMessage[item-1].school
		}"
					/>
					<div class="middiv">
						<button class="midbtn">查看更多></button>
					</div>
				</div>
			</div>
			<div class="news-layout">
				<div class="newsbox">
					<div class="bottombox">
						<h3>活动公告</h3>
					</div>
				</div>
				<News v-for="item in 6" :key="item" :newsMessage="{
					index:item,
					content:newsMessage[item-1].content,
					date:newsMessage[item-1].date,

				}" />
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
  
<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Mainbox from '@/components/Mainbox.vue'
import News from '@/components/News.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'Home',
	components: {
		Nav,
		Mainbox,
		News,
		Footer
	},
	data() {
		return {
			imglist: [
				'https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/banner-2.64b1407e7a8db89d6cf2.jpg',
				'https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/banner-4.4ac0f6534a11844638e4.jpg',
				'https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/banner-10.30eaaf519fa37bf97d36.jpg',
				'https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/banner-8.d14241daf518717981c6.jpg',
			],
			leftcontent:
				'Classroom是基于华为云的云上软件教学服务，支持高校师生实现备课、上课、作业、考试、实验、实训等全教学流程的线上教学，提供多类习题自动判题、企业级DevOps实训、免费在线习题库等众多高级特性辅助进行数字化教学转型。',
			cardMessage: [
				{
					cardname: '区块链精品实践课',
					time: 6,
					text:
						'本课程由浅入深的介绍区块链技术缘起、原理机制、演进和发展现状，分享区块链典型应用场景及特点。了解华为云区块链的方案及特点，参与动手实验。从入门到实践，循序渐进一站式学习。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: '技术大咖在线论道-华为云技术开放视频合集课堂入口',
					time: 90,
					text:
						'【技术大咖在线论道 百万+开发者精益成长】 汇聚多领域资深技术专家视频课程； 探讨国内外前沿技术领域发展趋势； 助力开发者专业技术能力精益成长； 分享可借鉴研发技术实践成功经验。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: 'HE2E DevOps实践',
					time: 16,
					text:
						'HE2E即华为端到端的DevOps实施框架，集合了业界先进的实践，结合华为30年研发经验，形成的一套可操作可落地的敏捷开发方法论，并基于DevCloud工具链进行承载。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: 'C语言程序设计',
					time: 96,
					text:
						'本课程适合作为高等学校计算机专业及相关专业C语言程序设计课程的教材，也可作为计算机等级考试参考书，还可供从事计算机软件开发人员参考使用。主要包含，C语言概述，数据类型，基本语句与结构化程序设计，数组，函数和模块化程序设计，指针，预处理命令，复杂数据类型，文件。附有习题，习题覆盖知识重点，题型丰富。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: 'Web实践课',
					time: 96,
					text:
						'本门课程涵盖：WEB基础、CSS、JS、H5等教学内容组成，学生可以逐步提升前端开发能力。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: '人工智能：算法与实践',
					time: 96,
					text:
						'本课程讲述的是有关人工智能算法与实践的内容，并介绍相关的数学基础、相关应用及工具，以及如何在实际环境中使用它们。课程不仅仅介绍了各种人工智能算法的理论知识，更是通过建立多个实际案例、习题测评，引导学生在实际项目中学到相关知识经验，同时老师可以灵活安排学生的学习任务，有效地对学生的知识吸收情况做针对性的解决。课程开发环境为python3.6及以上 + Anaconda3 。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: 'JAVA-习题库',
					text:
						'本习题库覆盖JAVA的相关知识，习题涉及到基本数据类型、语句、类、封装继承、对象、接口、内部类、异常处理、字符串、实用类、多线程、输入输出流等相关知识。 习题类型包括单选题、编程题、单人项目题等，每个习题都与知识点相对于，通过这些习题，可以很好的检查学生对JAVA知识的掌握程度，提升学生的动手编码能力。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: 'C-习题库',
					text:
						'本习题库覆盖C语言的相关知识，习题涉及到C语言概述，数据类型，基本语句与结构化程序设计，数组，函数和模块化程序设计，指针，预处理命令，复杂数据类型，文件操作等。习题类型包括单选题、编程题，每个习题都与知识点相对应，所有习题支持自动判题，通过这些习题，可以很好的检查学生对C语言知识的掌握程度，提升学的动手编码能力。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: 'Web-习题库',
					text:
						'本习题库覆盖web开发相关知识点，对HTML、CSS、JavaScript等内容，进行了习题覆盖。习题类型包括单选题、编程题，每个习题都与知识点相对于，通过这些习题，可以很好的检查学生对Web知识的掌握程度，提升学生的动手编码能力。',
					isfree: true,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: '系统分析与设计',
					text:
						'本课程通过DevOps与云服务相结合，基于“项目驱动”的工程实践进行能力训练，采取“基础知识-->核心应用-->综合案例-->企业实践”的结构和“由浅入深，由深到精”的学习模式进行讲解，掌握产品经理与项目经理应具备的技能知识点，具备云服务与开发的基本能力。',
					isfree: false,
					author: '马瑞新',
					school: '大连理工大学',
				},
				{
					cardname: '数据结构（C语言）实践教学精品课',
					text:
						'本课程对常用的数据结构做了系统的介绍，力求概念清晰，注重实际应用。课程依次介绍数据结构的基本概念、线性表、栈和队列、串和数组、树和二叉树、图结构，以及查找和排序等基本运算，用C语言作为算法描述语言，并附有典型例题与小结，便于读者总结和提高',
					isfree: false,
					author: 'Classroom',
					school: '华为云',
				},
				{
					cardname: 'Python程序设计精品课',
					text:
						'本课程主要介绍Python语言的语法及常用模块的使用，重点介绍面向对象设计，字符串操作，正则表达式等知识，同时通过游戏设计，展示Python语言的简易和强大。',
					isfree: false,
					author: 'Classroom',
					school: '华为云',
				},
			],
			newsMessage: [
				{
					content:
						'大连理工大学与华为软件工程大师华山论剑，邀您参与。',
					date: '2020/03/31',
				},
				{
					content:
						'大连理工、华为云、目睹有课三方携手直播JAVA线上教学。',
					date: '2020/02/07',
				},
				{
					content: '【Part1】玩转华为云Classroom，在线教学so easy！',
					date: '2020/02/01',
				},
				{
					content: '【Part2】玩转华为云Classroom，在线教学so easy！',
					date: '2020/02/01',
				},
				{
					content: 'Classroom开放免费高校自学课程，与您并肩战“疫”！',
					date: '2020/01/31',
				},
				{
					content: 'Classroom开放免费高校自学课程，与您并肩战“疫”！',
					date: '2020/01/28',
				},
			],
		}
	},
}
</script>

<style>
* {
	box-sizing: border-box;
}
body {
	margin: 0px;
	font-family: PingFang SC, PingFangSC-Regular, Helvetica Neue,
		Microsoft YaHei Regular, Microsoft YaHei, 宋体, 'sans-serif';
}
.home {
	width: 100%;
}
.home .nav {
	z-index: 10000;
	position: fixed;
}
.block {
	display: block;
	position: relative;
	top: 61px;
	width: 100%;
}
.block .main-layout {
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	width: 1200px;
}

.block .main-layout .mainbox {
	position: relative;
}
.midbox {
	width: 1200px;
	text-align: center;
	margin: 30px 0 40px;
}
h3 {
	font-size: 24px;
	font-weight: 700;
	color: #293040;
	margin: 0 0 16px;
}
.midbox span {
	font-size: 16px;
	color: #575d6c;
}
.block .main-layout .startbox {
	display: flex;
	flex-wrap: nowrap;
	padding: 30px;
	position: relative;
	top: -10px;
	z-index: 2;
	width: 1200px;
	background: #fff;
	box-shadow: 0 0 20px 0 rgba(41, 48, 64, 0.1);
	border-radius: 5px;
	align-items: center;
	margin: 0 auto;
}
.middiv {
	width: 100%;
	text-align: center;
}
.middiv .midbtn {
	height: 40px;
	font-size: 16px;
	color: #293040;
	line-height: 24px;
	background: #fafafa;
	border: 1px solid #e3e5e9;
	box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
	/* width: 130px; */
	padding: 4px 20px;
}
.block .market-layout {
	padding: 0 calc((100% - 1200px) / 2);
	background-color: #fafafa;
}
.block .news-layout {
	background-color: #ffffff;
	width: 1200px;
	margin: 80px auto;
	display: flex;
	flex-wrap: wrap;
}
.block .news-layout .newsbox {
	width: 1200px;
	text-align: center;
	margin-bottom: 30px;
}
.block .market-layout .marketbox {
	width: 1200px;
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 60px;
	margin-top: 60px;
}
.block .startbox .leftcontent {
	flex: 1;
	padding-right: 40px;
	font-size: 16px;
	color: #5e6678;
	line-height: 32px;
}
.block .startbox .rightbtn {
	line-height: 20px;
	height: 32px;
	border-radius: 16px;
	margin-right: 12px;
	padding: 4px 20px;
	border: none;
	font-size: 14px;
	white-space: nowrap;
	cursor: pointer;
	background-color: #5e7ce0;
	color: #fff;
}

.el-carousel__item img {
	width: 100%;
}
</style>
