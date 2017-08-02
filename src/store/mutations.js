export default {
  DISPLAY_SIDEBAR: state => state.displaySidebar = state.displaySidebar ? false:true,
  // TOGGLE_LOADING: state => state.loading
  IS_CURRENT: (state, tab) => state.isCurrent = tab,
  IS_LOADING: (state, value) => state.loading = value,
  IS_CONTENT: (state, value) => state.isContent = value,
}
