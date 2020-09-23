<template>
	<div
		class="main-mooccard"
		@mouseover="addActive($event)"
		@mouseout="removeActive($event)"
		v-show="right"
	>
		<div class="mooccardbox">
			<div class="mooccardbg" :style="{backgroundPosition:position}"></div>
			<div class="mooccardwrapper">
				<div class="mooccard-content">
					<div class="mooccard-name">
						<span class="mooccard-title">{{name}}</span>
						<div class="mooccard-icon">
							<span class="author">
								<i class="el-icon-office-building"></i>
								{{author}}
							</span>

							<span class="school">
								<i class="el-icon-office-building"></i>
								{{school}}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['Moocbox'],
	data() {
		return {
			name: this.Moocbox.name,
			school: this.Moocbox.school,
			author: this.Moocbox.author,
			type: this.Moocbox.type,
			nowType: '',
			right: true,
		}
	},
	computed: {
		position: function () {
			return '0' + ' ' + ((this.Moocbox.index - 1) * -200 - 2000) + 'px'
		},
	},
	beforeCreate: function () {
		this.right = true
	},
	methods: {
		addActive($event) {
			$event.currentTarget.className = 'main-mooccard active'
		},
		removeActive($event) {
			$event.currentTarget.className = 'main-mooccard'
		},
	},
	watch: {
		Moocbox: {
			// immediate: true,
			handler(newVal) {
				this.nowType = newVal.nowType
				if (this.nowType == '全部') {
					this.right = true
				} else {
					this.right = this.type == this.nowType
				}
			},
		},
	},
}
</script>

<style scoped>
* {
	box-sizing: border-box;
}
span {
	display: inline-block;
	vertical-align: middle;
}
.main-mooccard {
	width: 284px;
	margin: 20px 60px 10px 0;
	border: 1px solid #f7f8fa;
	box-shadow: 0 4px 16px 0 rgba(124, 142, 227, 0.12);
	border-radius: 12px;
	display: inline-block;
	cursor: pointer;
	transition: 0.3s;
	height: 270px;
}
.active {
	margin-top: 10px;
	margin-bottom: 0px;
	box-shadow: 0 4px 26px 0 rgba(124, 142, 227, 0.42);
}
.main-mooccard .mooccardbox {
	width: 100%;
	position: relative;
}
.main-mooccard .mooccardbox .mooccardbg {
	height: 200px;
	background-image: url(https://res.devcloud.huaweicloud.com/obsdevui/diploma/8.1.24.002/index-cloud.07a57744ef9e998461a5.png);
	border-radius: 12px 12px 0 0;
}
.main-mooccard .mooccardbox .mooccardwrapper {
	padding: 0 20px;
}
.main-mooccard .mooccardbox .mooccardwrapper .mooccard-content {
	margin-top: 16px;
}
.main-mooccard .mooccardbox .mooccardwrapper .mooccard-content .mooccard-name {
	clear: both;
}

.main-mooccard
	.mooccardbox
	.mooccardwrapper
	.mooccard-content
	.mooccard-name
	.mooccard-title {
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
.main-mooccard
	.mooccardbox
	.mooccardwrapper
	.mooccard-content
	.mooccard-name
	.mooccard-icon {
	margin-top: 8px;
	color: #959eb2;
	font-size: 12px;
}
.main-mooccard
	.mooccardbox
	.mooccardwrapper
	.mooccard-content
	.mooccard-name
	.mooccard-icon
	.floatright {
	float: right;
	vertical-align: middle;
}
.main-mooccard
	.mooccardbox
	.mooccardwrapper
	.mooccard-content
	.mooccard-name
	.mooccard-icon
	.author {
	margin-left: 2px;
	margin-right: 6px;
	margin-bottom: 5px;
}
.main-mooccard
	.mooccardbox
	.mooccardwrapper
	.mooccard-content
	.mooccard-name
	.mooccard-icon
	.school {
	margin-left: 2px;
	margin-right: 6px;
	margin-bottom: 5px;
}
</style>