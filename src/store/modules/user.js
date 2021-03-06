import conf from '@/config.js'
// initial state
const state = () => ({
  isAuth: false,
  role: '',
  id: '',
  screenToken: conf.TOKEN
})

// getters
const getters = {
  getRole: state => state.role,
  getUserId: state => state.id,
  isAuth: state => state.isAuth,
  screenToken: state => state.screenToken
}

// actions
const actions = {
  getAuth(context, credentials) {
    return new Promise((resolve) => {
      if(credentials.email == '1@1' && credentials.password == '1') {
        context.commit('login', {role: 'admin'})
        resolve({status: true})
      } else if(credentials.email == 'user@user' && credentials.password == 'user') {
        context.commit('login', {role: 'user'})
        resolve({status: true})
      }
    })

    // return new Promise((resolve, reject) => {
    //   HTTP.get('/users?login=' + credentials.email)
    //   .then((response) => {
    //     if(response.data.length == 0) {
    //       resolve({
    //         status: false,
    //         message: 'Данный пользователь не существует'
    //       })
    //     } else if(response.data[0].password == credentials.password) {
    //       context.commit('login', {
    //         role: response.data[0].role,
    //         id: response.data[0].id
    //       })

    //       resolve({
    //         status: true,
    //         message: 'login'
    //       })
    //     } else {
    //       resolve({
    //         status: false,
    //         message: 'Неверный пароль, попробуйте еще'
    //       })
    //     }

    //   })
    //   .catch(err => {
    //     console.log(err)
    //     reject({
    //       status: false,
    //       message: err
    //     })
    //   })
    // })
  },

  logout(context) {
    context.commit('logout')
  },

}

// mutations
const mutations = {
  login(state, props) {
    state.isAuth = true
    state.role = props.role
    // state.id = props.id
  },

  logout(state) {
    state.isAuth = false
    state.role = ''
    state.id = ''
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}