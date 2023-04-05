export default{
  namespaced:true,
  state:()=>({
    userInfo:JSON.parse(uni.getStorageSync('userInfo') || '{}'),
    token:uni.getStorageSync('token') || '',
    uId:uni.getStorageSync('uId'),
    avatarurl:uni.getStorageSync('avatarurl'),
    nickname:uni.getStorageSync('nickname'),
    lock:uni.getStorageSync('lock')
  }),
  mutations:{
    updateUserInfo(state,userInfo){
      state.userInfo = userInfo
      this.commit('m_user/saveUserInfoToStorage')
    },
    saveUserInfoToStorage(state){
      uni.setStorageSync('userInfo',JSON.stringify(state.userInfo))
    },
    updateToken(state,token){
      state.token = token;
      this.commit('m_user/saveTokenToStorage')
    },
    saveTokenToStorage(state){
       uni.setStorageSync('token', state.token)
    },
    updateUId(state,uId){
      state.uId = uId
      this.commit('m_user/saveUIdToStorage')
    },
    saveUIdToStorage(state){
      uni.setStorageSync('uId',state.uId)
    },
    updateavatarurl(state,avatarurl){
      state.avatarurl = avatarurl
      this.commit('m_user/saveavatarurlToStorage')
    },
    saveavatarurlToStorage(state){
      uni.setStorageSync('avatarurl',state.avatarurl)
    },
    updateNickname(state,nickname){
      state.nickname = nickname
      this.commit('m_user/saveNicknameToStorage')
    },
    saveNicknameToStorage(state){
      uni.setStorageSync('nickname',state.nickname)
    },
    updateLock(state,lock){
      state.lock = lock
      this.commit('m_user/saveLockToStorage')
    },
    saveLockToStorage(state){
      uni.setStorageSync('lock',state.lock)
    }
  },
  getters:{
    
  }
}