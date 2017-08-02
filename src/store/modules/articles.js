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
    CLEAR_DATA: (state, data) => state.topic_data = [],
    CHANGE_LIMIT: state => state.limit += 10,
    RESET_LIMIT: state => state.limit = 10,
  },
  actions: {
    changeTopic: ({commit}, tab) => commit('CHANGE_TOPIC', tab),
    initData: ({commit}, data) => commit('INIT_DATA', data),
    clearData: ({commit}, data) => commit('CLEAR_DATA'),
    changeLimit: ({commit}) => commit('CHANGE_LIMIT'),
    resetLimit: ({commit}) => commit('RESET_LIMIT')
  }
}
