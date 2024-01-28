import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const COVER_URL = [
  require('./assets/cover.jpg'),
  require('./assets/cover2.jpg'),
  require('./assets/cover3.jpg'),
  require('./assets/offline-863552267.jpg')
    // require('@/assets/cover.jpg'),
    // require('@/assets/cover2.jpg'),
    // require('@/assets/cover3.jpg'),
    // require('@/assets/offline-863552267.jpg')
]

export default new Vuex.Store({
  state: {
    isPlaying: false,
    coverUrl: ''
  },
  getters: {},
  mutations: {
    togglePlay (state, toggle) {
      state.isPlaying = toggle !== undefined ? toggle : !state.isPlaying
    },
    changeCover (state) {
      while (1) {
        const index = Math.floor(Math.random() * 4)
        const coverUrl = COVER_URL[index]
        if (coverUrl !== state.coverUrl) {
          state.coverUrl = coverUrl
          // state.coverUrl = 'https://p1.music.126.net/l8JENFZ2WhKiCAecSbUTAg==/109951164898196412.jpg'
          break
        }
      }
    }
  },
  actions: {}
})
