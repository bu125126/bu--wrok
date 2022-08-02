<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <!-- <div>
    <h1>名字：{{ name }}</h1>
    <h2>年龄：{{ age }}</h2>
    <h2>{{ arr }}</h2>
    <h2>{{ a.b.c.d.aaa }}</h2>

    <button @click="get">点击</button>
    <br>
    <button @click="getlist">点击修改</button>
    <br>
    <button @click="he">获取vue2的值</button>
  </div> -->
    <!-- <div>
    <h1>名字：{{ name }}</h1>
    <h2>年龄：{{ age }}</h2>
    <h2>{{ arr }}</h2>
    <h2>{{ a.b.c.d.aaa }}</h2>

    <button @click="get">点击</button>
    <br>
    <button @click="getlist">点击修改</button>
    <br>
    <button @click="he">获取vue2的值</button>
  </div> -->
      <div>
    <h1>名字：{{ name }}</h1>
    <h2>年龄：{{ age }}</h2>
    <h2>{{ arr }}</h2>
    <h2>{{ a.b.c.d.aaa }}</h2>

    <button @click="get">点击</button>
    <br>
    <button @click="getlist">点击修改</button>
    <br>
    <button @click="he">获取vue2的值</button>
  </div>
</template>
<script lang="ts">
// import { reactive, ref } from 'vue'
// /**
//  * vue2可以获取vue3的数据
//  * vue3不能获取vue2的数据 
//  * 通过ref定义基本数据类型 响应式数据
//  *  通过value进行修改 标签不需要定义value
//  */
// export default {
//   // data() {
//   //   return {
//   //     name:'张三',
//   //     age:50,
//   //   }
//   // },
//   // methods: {
//   //   he(){
//   //     console.log(this.name);
//   //     console.log(this.sex);
//   //   }
//   // },
//   setup() {
//     let name = ref("李四")
//     let age = ref(18)
//     let sex = ref('男')
//     let arr = ref(['张三', '李四', '王五'])

//     let get = () => {
//       alert(`我的名字${name.value}今年${age.value}`)
//     }

//     let a = reactive({
//       b: {
//         c: {
//           d:{
//             'aaa':'对'
//           }
//         }
//       }
//     })

//     let getlist = () => {
//       console.log(name);
//       name.value = "李思佳别玩了好吗？？？？"
//       console.log(arr.value);
//       arr.value[1] = "一个"
//       console.log(a);
//       a.b.c.d.aaa="错"
//     }

//     return {
//       name,
//       age,
//       sex,
//       get,
//       getlist,
//       arr,
//       a
//     }
//   }
// }
// import { reactive, ref } from 'vue'
// /**
//  * vue2可以获取vue3的数据
//  * vue3不能获取vue2的数据 
//  * 通过ref定义基本数据类型 响应式数据
//  *  通过value进行修改 标签不需要定义value
//  */
// export default {
//   // data() {
//   //   return {
//   //     name:'张三',
//   //     age:50,
//   //   }
//   // },
//   // methods: {
//   //   he(){
//   //     console.log(this.name);
//   //     console.log(this.sex);
//   //   }
//   // },
//   setup() {
//     let name = ref("李四")
//     let age = ref(18)
//     let sex = ref('男')
//     let arr = ref(['张三', '李四', '王五'])

//     let get = () => {
//       alert(`我的名字${name.value}今年${age.value}`)
//     }

//     let a = reactive({
//       b: {
//         c: {
//           d:{
//             'aaa':'对'
//           }
//         }
//       }
//     })

//     let getlist = () => {
//       console.log(name);
//       name.value = "李思佳别玩了好吗？？？？"
//       console.log(arr.value);
//       arr.value[1] = "一个"
//       console.log(a);
//       a.b.c.d.aaa="错"
//     }

//     return {
//       name,
//       age,
//       sex,
//       get,
//       getlist,
//       arr,
//       a
//     }
//   }
// }
import { reactive, ref } from 'vue'
/**
 * vue2可以获取vue3的数据
 * vue3不能获取vue2的数据 
 * 通过ref定义基本数据类型 响应式数据
 *  通过value进行修改 标签不需要定义value
 */
export default {
  // data() {
  //   return {
  //     name:'张三',
  //     age:50,
  //   }
  // },
  // methods: {
  //   he(){
  //     console.log(this.name);
  //     console.log(this.sex);
  //   }
  // },
  setup() {
    let name = ref("李四")
    let age = ref(18)
    let sex = ref('男')
    let arr = ref(['张三', '李四', '王五'])

    let get = () => {
      alert(`我的名字${name.value}今年${age.value}`)
    }

    let a = reactive({
      b: {
        c: {
          d:{
            'aaa':'对'
          }
        }
      }
    })

    let getlist = () => {
      console.log(name);
      name.value = "李思佳别玩了好吗？？？？"
      console.log(arr.value);
      arr.value[1] = "一个"
      console.log(a);
      a.b.c.d.aaa="错"
    }

    return {
      name,
      age,
      sex,
      get,
      getlist,
      arr,
      a
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
