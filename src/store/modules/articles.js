export default {
  state: {
    page: 1,
    limit: 10,
    currentTab: 'all',
    topic_data: []
  },
  mutations: {
    CHANGE_TOPIC: (state, tab) => state.currentTab = tab,
    INIT_DATA: (state, data) => state.topic_data = data,
    CLEAR_DATA: (state, data) => state.topic_data = []
  },
  actions: {
    changeTopic: ({commit}, tab) => commit('CHANGE_TOPIC', tab),
    initData: ({commit}, data) => commit('INIT_DATA', data),
    clearData: ({commit}, data) => commit('CLEAR_DATA')
  }
}
