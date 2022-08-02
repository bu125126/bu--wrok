<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view/> -->
  <h1>123123</h1>
  <h2>我是{{ name }}</h2>
  <h2>{{ age }}</h2>
  <h2>{{ sex }}</h2>
  <h2>{{ arr }}</h2>
  <h2>{{ a.b.c.ddd }}</h2>
  <button @click="fs">点击</button>
  <br>
  <button @click="xiu">修改</button>
  <button @click="hehe">获取vue3</button>
</template>
<script lang="ts">
import { reactive, ref, Ref } from '@vue/reactivity'
export default {
  // data(){
  //   return{
  //     name:'李思佳',
  //     age:28,
  //     sex:'其它'
  //   }
  // },
  // methods:{
  //   hehe(){
  //     console.log(this.name);
  //     console.log(this.age);
  //     console.log(this.sex);
  //   }
  // },
  setup() {

    let name: Ref<string> = ref("123")
    let age: Ref<number> = ref(18)
    let sex: Ref<string> = ref("女")
    // let arr: string[] = reactive(['一', '二', '三'])
    let arr: Array<string> = reactive(['一', '二', '三'])
    let a = reactive({
      b: {
        c: {
          'ddd':'不会'
        }
      }
    })
    const fs = () => {
      alert(`我是${name.value} 今年${age.value}`)
    }
    const xiu = () => {
      console.log(sex);
      sex.value = "男"
      console.log(arr);
      arr[0] = "1"
      console.log(a);
      a.b.c.ddd = "真不会"
    }
    return {
      name,
      age,
      arr,
      sex,
      a,
      fs,
      xiu,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
