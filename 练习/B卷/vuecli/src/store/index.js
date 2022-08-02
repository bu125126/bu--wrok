import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shu:[]
  },
  mutations: {
    add(state,books){
      const idx =state.shu.findIndex(item=>item.id===books.id)
      console.log(idx);
      if (idx!=-1) {
        state.shu[idx].num++
      }else{
        state.shu.push(books)
      }
    },
    del(state,id){
      const idx =state.shu.findIndex(item=>item.id===id)
      state.shu.splice(idx,1)
    },
    bj(state,id){
      const idx =state.shu.findIndex(item=>item.id===id)
      state.shu[idx].chekced=!state.shu[idx].chekced
      console.log(state.shu[idx.chekced]);
    } 
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: sessionStorage
    })
  ]
})