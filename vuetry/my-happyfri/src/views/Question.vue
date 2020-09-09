<template>
  <div id="question">
    <h3>{{ questionNum }}</h3>
    <div>{{ question }}</div>
    <div class="clearfix">
      <input type="radio" id="a" value="1" v-model="picked" />
      <label for="a">{{ choose1 }}</label>
      <br />
      <input type="radio" id="b" value="2" v-model="picked" />
      <label for="b">{{ choose2 }}</label>
      <br />
      <input type="radio" id="c" value="3" v-model="picked" />
      <label for="c">{{ choose3 }}</label>
      <br />
      <input type="radio" id="d" value="4" v-model="picked" />
      <label for="d">{{ choose4 }}</label>
    </div>
    <div>
      <button v-if="count == 1" id="next_button" @click="next()"></button>
      <button v-if="count == 2" id="next_button" @click="next()"></button>
      <button v-if="count == 3" id="next_button" @click="next()"></button>
      <button v-if="count == 4" id="next_button" @click="next()"></button>
      <button v-if="count == 5" id="next_button" @click="next()"></button>
    </div>
    <div id="span">用时：{{ time }}秒</div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Question",
  store,
  data() {
    return {
      questionNum: "第一题",
      question: "你聪明吗？",
      choose1: "一点也不",
      choose2: "中等偏下",
      choose3: "中等偏上",
      choose4: "非常聪明(我是对的)",
      picked: "",
      count: 1,
      rightChoice: 4,
      score: 0,
      time: 0
    };
  },
  created: function() {
    this.startTime();
    setInterval(this.startTime, 1000);
  },
  methods: {
    detailQues() {
      if (this.count == 2) {
        this.questionNum = "第二题";
        this.question = "你们忙吧，我_____去了";
        this.choose1 = "吃烤肉（我是对的）";
        this.choose2 = "吃炒菜";
        this.choose3 = "吃火锅";
        this.choose4 = "吃冰块";
        this.rightChoice = 1;
      } else if (this.count == 3) {
        this.questionNum = "第三题";
        this.question = "最近一次太阳升起";
        this.choose1 = "今天早上（我是对的）";
        this.choose2 = "今天中午";
        this.choose3 = "昨天早上";
        this.choose4 = "昨天下午";
        this.rightChoice = 1;
      } else if (this.count == 4) {
        this.questionNum = "第四题";
        this.question = "一星期有几天";
        this.choose1 = "5";
        this.choose2 = "7（我是对的）";
        this.choose3 = "6";
        this.choose4 = "8";
        this.rightChoice = 2;
      } else if (this.count == 5) {
        this.questionNum = "第五题";
        this.question = "番茄是什么颜色";
        this.choose1 = "红色（我是对的）";
        this.choose2 = "黑色";
        this.choose3 = "蓝色";
        this.choose4 = "绿色";
        this.rightChoice = 1;
      } else {
        this.aScore();
        this.aTime();
        this.$router.push("./score");
        // alert("你的分数是" + this.score);
      }
    },
    next() {
      if (this.picked == "") {
        alert("还没有选择哦");
        return;
      }
      this.count++;
      this.addScore();
      this.detailQues();
    },
    startTime() {
      this.time++;
    },
    addScore() {
      if (this.picked == this.rightChoice) {
        this.score += 20;
        this.picked = "";
      } else {
        this.picked = "";
      }
    },
    aScore() {
      store.commit("abcdScore", this.score);
    },
    aTime() {
      store.commit("abcdTime", this.time);
    }
  }
};
</script>

<style>
input {
  /* text-align: left; */
  float: left;
}

#next_button {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-top: 100px;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
  background-image: url(../pic/next.png);
}

#span {
  display: flex;
  margin: 200px 0 0 0;
}
#question {
  overflow: hidden;
}
.clearfix {
  float: left;
  margin-left: 100px;
}
</style>
