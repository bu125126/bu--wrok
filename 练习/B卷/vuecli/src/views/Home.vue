<template>
  <div>
    <div class="login">用户登录</div>
    <span class="qh">切换主题</span>
    <div class="form">
      <div>
        手机号：<input type="text" @input="shouji" v-model="mobile">
        <van-icon v-show="showsj === 2" color="red" name="clear" />
        <van-icon v-show="showsj === 3" color="green" name="checked" />
      </div>
      <div>
        密 码：<input type="password" @input="mima" v-model="pwd">
        <van-icon v-show="showpwd === 2" color="red" name="clear" />
        <van-icon v-show="showpwd === 3" color="green" name="checked" />
      </div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      sj: /^1[3-9]\d{9}$/,
      mm: /^[a-zA-Z][0-9]{6,10}$/,
      mobile: '',
      pwd: '',
      showsj: 1,
      showpwd: 1,
    };
  },

  methods: {
    shouji() {
      if (this.sj.test(this.mobile)) {
        this.showsj = 3
      } else {
        this.showsj = 2
      }
    },
    mima() {
      if (this.mm.test(this.pwd)) {
        this.showpwd = 3
      } else {
        this.showpwd = 2
      }
    },
    login() {
      if (this.sj.test(this.mobile) || this.mm.test(this.pwd)) {
        this.$router.push('/about')
      } else {
        this.$toast.fail("请输入正确信息");
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 50px;
  background-color: orange;
  text-align: center;
  line-height: 50px;
  color: white;
  font-weight: 500;
}

.qh {
  font-size: 14px;
  color: blue;
  position: absolute;
  top: 17px;
  right: 5px;
}

.form {
  margin-top: 100px;
  margin-left: 30px;
  position: relative;

  input {
    margin: 10px;
    width: 150px;
  }

  button {
    width: 150px;
    height: 45px;
    border: none;
    color: white;
    background-color: gray;
    font-weight: 500;
    margin-left: 50px;
    margin-top: 30px;
    border-radius: 5px;
  }

  .yes {
    width: 10px;
    height: 10px;
  }
}
</style>