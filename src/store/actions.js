export default {
  displaySidebar: ({commit}) => commit('DISPLAY_SIDEBAR'),
  isCurrent: ({commit}, tab) => commit('IS_CURRENT', tab)
}
