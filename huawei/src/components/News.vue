<template>
	<div class="noticebox">
		<a
			href="https://classroom.devcloud.cn-north-4.huaweicloud.com/joinclass/2806547cce804017884bfd0ac7847c0b/1"
			class="leftpic"
			:style="{backgroundPosition:position}"
		></a>
		<div class="left">
			<a
				href="https://classroom.devcloud.cn-north-4.huaweicloud.com/joinclass/2806547cce804017884bfd0ac7847c0b/1"
				class="notice-title"
			>{{content}}</a>
			<div class="gray">
				<span>Classroom | {{date}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['newsMessage'],
	data() {
		return {
			content: this.newsMessage.content,
			date: this.newsMessage.date,
		}
	},
	computed: {
		position: function () {
			return '0' + ' ' + (this.newsMessage.index - 1) * -96 + 'px'
		},
	},
}
</script>

<style>
a {
	text-decoration: none;
}
.left {
	float: left !important;
}
.noticebox {
	overflow: hidden;
	width: 100%;
	border-bottom: 1px solid #e3e5e9;
	padding-bottom: 30px;
	margin-bottom: 30px;
}
.leftpic {
	float: left;
	width: 160px;
	height: 96px;
	background-color: red;
	margin-right: 30px;
	background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/notice.215e169ce5a0ddc20722.png);
}
.notice-title {
	display: inline-block;
	font-size: 20px;
	color: #293040;
	line-height: 36px;
	padding-bottom: 30px;
}
.gray {
	color: #959eb2;
}
</style>