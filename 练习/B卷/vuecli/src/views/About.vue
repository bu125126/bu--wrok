<template>
  <div>
    <div class="login">图书商城</div>
    <span class="qh" @click="$router.push('/books')">我的书架</span>
    <input type="text" class="ss" placeholder="输入书名搜索" @keydown="ss" v-model="key">
    <ul>
      <li v-for="item in book" :key="item.id">
        <div class="img-box"><img :src="'/素材/' + item.img" alt=""></div>
        <div class="desc">{{ item.desc }}</div>
        <div class="pin">
          <span class="name">{{ item.name }}</span>
          <span class="jia" @click="add(item)">+</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import book from '../../public/data.json'
export default {

  data() {
    return {
      book: book,
      key: ''
    };
  },

  mounted() {

  },

  methods: {
    ss() {
      if (this.key) {
        const a = this.book.filter(item => {
          return item.name.includes(this.key)
        })
        this.book = a
      }
    },
    add(item) {
     this.$store.commit('add',{...item,num:1,checked:false})
      this.$toast.fail("添加成功");
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  li {
    width: 47%;
    margin-top: 10px;

    .img-box {
      width: 100%;
      height: 200px;

      img {
        width: 100%;
        height: 200px;
      }
    }

    .desc {
      font-size: 14px;
      color: gray;
      margin: 10px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .pin {
      color: red;
      display: flex;
      justify-content: space-between;
      width: 90%;

      .jia {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: red;
        color: white;
        text-align: center;
        line-height: 25px;
      }
    }
  }
}

.login {
  width: 100%;
  height: 50px;
  background-color: rgb(255, 34, 0);
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

.ss {
  width: 100%;
  background-color: rgb(150, 150, 150);
  border: 0;
  height: 30px;
}
</style>