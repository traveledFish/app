import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // count: 0,
    loginstate: '',
    // arr: [0, 1, 2, 3, 4, 5],
    proinfo: {
      proid: '',
      prourl: '',
      title: '',
      price: '',
      brief: ''
    }
  },
  getters: {
    // len: state => {
    //   return state.arr.length
    // },
    // countadd1: state => {
    //   return ++state.count
    // }
  },
  mutations: {
    reset (state, data) {
      // 对应第一种提交方式
      // state.count += data
      // 对应第二种提交方式
      // state.count += data.addstep
      state.proinfo.proid = data.prodetail.proid
      state.proinfo.prourl = data.prodetail.prourl
      state.proinfo.title = data.prodetail.title
      state.proinfo.price = data.prodetail.price
      state.proinfo.brief = data.prodetail.brief
      // 对应第三种提交方式
      // state.count += data.
    },
    changeLoginstate (state, data) {
      state.loginstate = data
    }
  },
  actions: {

  }
})
