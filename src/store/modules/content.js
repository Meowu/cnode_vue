export default {
  state: {
    topic_content: []
  },
  mutations: {
    RENDER_CONTENT: (state, data) => state.topic_content = data,

  },
  actions: {
    renderContent: ({commit}, data) => commit('RENDER_CONTENT', data)
  }
}
