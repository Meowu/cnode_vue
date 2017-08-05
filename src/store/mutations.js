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
    state.token = localStorage.getItem('token');
  },
  LOG_OUT: state => state.isLogin = false,
  REPLY: (state, bool) => state.reply = bool,
  REPLY_ID: (state, id) => state.repliedId = id,
  DISPLAY_NAME: (state, name) => state.commentName = name,
}
