export default {
  DISPLAY_SIDEBAR: state => state.displaySidebar = state.displaySidebar ? false:true,
  // TOGGLE_LOADING: state => state.loading
  IS_CURRENT: (state, tab) => state.isCurrent = tab,
  IS_LOADING: (state, value) => state.loading = value,
  IS_CONTENT: (state, value) => state.isContent = value,
  TOGGLE_LOGIN: state => {
    state.isLogin = true;
    state.avatar_url = localStorage.getItem('avatar_url');
    state.user_id = localStorage.getItem('user_id');
    state.loginname = localStorage.getItem('loginname');
  }
}
