<template>
  <div>
    <h1>新闻上传系统</h1>
    <form v-if="isReg">
      <p>用户名</p>
      <input type="text" v-model="name" />
      <p>密码</p>
      <input type="password" v-model="password" />
      <div>
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form v-else>
      <p>用户名</p>
      <input type="text" v-model="name" @blur="isNameRight()" @focus="nameInit()" />
      <div>
        <span>{{nameMsg}}</span>
      </div>
      <p>密码</p>
      <input type="password" v-model="password" @blur="isPasswordRight()" @focus="passwordInit()" />
      <div>
        <span>{{passwordMsg}}</span>
      </div>
      <p>再次输入密码</p>
      <input
        type="password"
        v-model="repeatPassword"
        @blur="isRepeatPasswordRight()"
        @focus="repeatPasswordInit()"
      />
      <div>
        <span>{{repeatPasswordMsg}}</span>
      </div>
      <div>
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isReg: true,
      name: "",
      password: "",
      repeatPassword: "",
      nameMsg: "用户名由4-16位数字，字母，下划线组成",
      passwordMsg: "密码至少包含数字和英文，长度6-20",
      repeatPasswordMsg: "密码至少包含数字和英文，长度6-20",
    };
  },
  methods: {
    nameInit() {
      this.nameMsg = "用户名由4-16位数字，字母，下划线组成";
    },
    isNameRight() {
      if (/^[a-zA-Z0-9_]{4,16}$/.test(this.name) == false) {
        this.nameMsg = "用户名格式错误";
      } else {
        this.nameMsg = "用户名格式正确";
      }
    },
    passwordInit() {
      this.passwordMsg = "密码至少包含数字和英文，长度6-20";
    },
    isPasswordRight() {
      if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.password) == false) {
        this.passwordMsg = "密码格式错误";
      } else {
        this.passwordMsg = "密码格式正确";
      }
    },
    repeatPasswordInit() {
      this.repeatPasswordMsg = "密码至少包含数字和英文，长度6-20";
    },
    isRepeatPasswordRight() {
      if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.repeatPassword) == false) {
        this.repeatPasswordMsg = "密码格式错误";
      } else {
        this.repeatPasswordMsg = "密码格式正确";
      }
    },
    login() {
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        this.name = "";
        this.password = "";
        this.$router.push("./home/list");
        alert("欢迎回来！");
      } else {
        alert("用户名或密码错误！");
      }
    },
    reg() {
      this.isReg = false;
      this.name = "";
      this.password = "";
      this.repeatPassword = "";
    },
    cancel() {
      this.isReg = true;
      this.name = "";
      this.password = "";
    },
    addUser() {
      if (
        this.password === this.repeatPassword &&
        /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.password) == true &&
        /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.repeatPassword) == true &&
        /^[a-zA-Z0-9_-]{4,16}$/.test(this.name) == true
      ) {
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.password);
        alert("注册成功！");
        this.password = "";
        this.repeatPassword = "";
        this.isReg = true;
      } else if (
        /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.password) == false ||
        /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(this.repeatPassword) == false ||
        /^[a-zA-Z0-9_-]{4,16}$/.test(this.name) == false
      ) {
        alert("用户名或密码格式错误");
        this.password = "";
        this.repeatPassword = "";
      } else {
        alert("两次密码不同，请重新输入");
        (this.password = ""), (this.repeatPassword = "");
      }
    },
  },
};
</script>

<style>
button {
  margin: 10px 10px 10px 0;
}
p {
  font-size: 16px;
}
span {
  font-size: 8px;
}
</style>