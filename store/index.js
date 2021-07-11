export const state = () => {
  return {
    data: [],
    loading: true,
    Comments: []
  }
}


export const getters = {
  getloading(state) {
    return state.loading
  },
  getData(state) {
    return state.data
  },
  getCom(state) {
    return state.comments
  }

}



export const mutations = {

  setData(state, load) {
    state.data = load
  },
  setLoading(state, flag) {
    state.loading = flag
  },
  setCom(state, load) {
    state.comments = load
  }

}

export const actions = {
  fetchData({
    commit
  }) {
    commit('setLoading', true)
    return this.$axios.$get('https://jsonplaceholder.typicode.com/posts').then((Response) => {
      commit('setData', Response)
    }).catch(() => {
      // eslint-disable-next-line no-console
      console.log('error');
    }).finally(() => {
      commit('setLoading', false)
    })
  },
  fetchCom({
    commit
  }) {
    commit('setLoading', true)
    return this.$axios.$get('https://jsonplaceholder.typicode.com/comments').then((Response) => {
      commit('setCom', Response)
    }).catch(() => {
      // eslint-disable-next-line no-console
      console.log('error');
    }).finally(() => {
      commit('setLoading', false)
    })
  }
}
