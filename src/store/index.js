import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import articles from './modules/articles'
import user from './modules/user'
import content from './modules/content'

Vue.use(Vuex)

const getters = {

}
export default new Vuex.Store({
  modules: {
    user,
    articles,
    content,
  },
  getters: getters,
  state,
  mutations,
  actions,
})
