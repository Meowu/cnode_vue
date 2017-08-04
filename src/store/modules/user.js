export default {
  state: {
    username: null,
    githubUsername: null,
    score: null,
    avatar_url: null,
    create_at: null,
  },
  actions: {
    checkUser: ({commit}, data) => commit('CHECK_USER', data)
  },
  mutations: {
    CHECK_USER: (state, data) => {
      state.username = data.loginname;
      state.githubUsername = data.githubUsername;
      state.avatar_url = data.avatar_url;
      state.create_at = data.create_at;
      state.score = data.score;
    }
  }
}
