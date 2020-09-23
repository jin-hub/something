<template>
	<div class="main-card" @mouseover="addActive($event)" @mouseout="removeActive($event)">
		<div class="cardbox">
			<div class="cardbg" :style="{backgroundPosition:position}"></div>
			<div class="cardwrapper">
				<div class="card-content">
					<div class="card-name">
						<span class="card-title">{{name}}</span>
						<div class="card-icon">
							<span class="author">
								<i class="el-icon-office-building"></i>
								{{author}}
							</span>

							<span class="school">
								<i class="el-icon-office-building"></i>
								{{school}}
							</span>
							<span class="floatright">
								<span class="time" v-if="time">{{time}}小时</span>
							</span>
						</div>
					</div>
					<div class="card-description" :title="text">{{text}}</div>
					<div class="box-line"></div>
					<div class="card-bottom">
						<div class="extra"></div>
						<span class="isfree" v-if="isfree">限时免费</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['message'],
	data() {
		return {
			name: this.message.cardname,
			time: this.message.time,
			text: this.message.text,
			isfree: this.message.isfree,
			author: this.message.author,
			school: this.message.school,
		}
	},
	computed: {
		position: function () {
			return '0' + ' ' + (this.message.index - 1) * -200 + 'px'
		},
	},
	methods: {
		addActive($event) {
			$event.currentTarget.className = 'main-card active'
		},
		removeActive($event) {
			$event.currentTarget.className = 'main-card'
		},
	},
}
</script>

<style>
* {
	box-sizing: border-box;
}
span {
	display: inline-block;
	vertical-align: middle;
}
.main-card {
	width: 380px;
	margin: 20px 10px 30px 10px;
	border-radius: 12px;
	display: inline-block;
	cursor: pointer;
	transition: all 0.1s linear 0.1s;
	box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
}
.active {
	margin-top: 10px;
	margin-bottom: 40px;
	box-shadow: 0 4px 26px 0 rgba(124, 142, 227, 0.42);
}
.main-card .cardbox {
	width: 100%;
	position: relative;
}
.main-card .cardbox .cardbg {
	height: 200px;
	background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/cloud-class.ae3edb05d5eb6d0bd170.png);
	border-radius: 12px 12px 0 0;
}
.main-card .cardbox .cardwrapper {
	padding: 0 20px;
}
.main-card .cardbox .cardwrapper .card-content {
	margin-top: 16px;
}
.main-card .cardbox .cardwrapper .card-content .card-description {
	margin-top: 10px;
	height: 48px;
	line-height: 24px;
	width: 100%;
	font-size: 14px;
	color: #5e6678;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	letter-spacing: 0.5px;
	word-break: break-all;
}
.main-card .cardbox .cardwrapper .card-content .card-name {
	clear: both;
}
.main-card .cardbox .cardwrapper .card-content .box-line {
	margin-top: 5px;
	width: 100%;
	height: 1px;
	opacity: 0.05;
	background: #000;
}

.main-card .cardbox .cardwrapper .card-content .card-bottom .extra {
	overflow: hidden;
	padding: 8px 0;
}
.main-card .cardbox .cardwrapper .card-content .card-bottom .isfree {
	font-size: 14px;
	text-align: center;
	line-height: 20px;
	color: #e41f2b;
	padding: 2px 4px;
	border-radius: 2px;
	background-color: rgba(228, 31, 43, 0.1);
	float: right;
	margin-bottom: 10px;
}
.main-card .cardbox .cardwrapper .card-content .card-name .card-title {
	width: 100%;
	font-size: 16px;
	color: #293040;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-weight: 700;
	display: inline-block;
	vertical-align: middle;
}
.main-card .cardbox .cardwrapper .card-content .card-name .card-icon {
	margin-top: 8px;
	color: #959eb2;
	font-size: 12px;
}
.main-card
	.cardbox
	.cardwrapper
	.card-content
	.card-name
	.card-icon
	.floatright {
	float: right;
	vertical-align: middle;
}
.main-card .cardbox .cardwrapper .card-content .card-name .card-icon .time {
	border: 1px solid #eee;
	border-radius: 12px;
	padding: 2px 8px;
	display: inline-block;
}
.main-card .cardbox .cardwrapper .card-content .card-name .card-icon .author {
	margin-left: 2px;
	margin-right: 6px;
}
</style>