export default {
  displaySidebar: ({commit}) => commit('DISPLAY_SIDEBAR'),
  isCurrent: ({commit}, tab) => commit('IS_CURRENT', tab),
  isLoading: ({commit}, value) => commit('IS_LOADING', value),
  isContent: ({commit}, value) => commit('IS_CONTENT', value),
  toggleLogin: ({commit}) => commit('TOGGLE_LOGIN'),
  logOut: ({commit}) => commit('LOG_OUT')
}
