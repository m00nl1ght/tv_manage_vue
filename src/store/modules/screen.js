import {HTTP} from '@/plugins/axios'
// initial state
const state = () => ({
    screens: []
})

// getters
const getters = {
    screens: state => state.screens
}

// actions
const actions = {
    getScreens(context) {
        HTTP.get('/api/screen')
        .then(res => context.commit('setScreens', res.data))
    },

    addScreen(context, data) {
        return new Promise((resolve, reject) => {
            HTTP.post('api/screen/store', data)
            .then(res => {
                if(res.status == 201) {
                    context.commit('addScreen', res.data)
                    resolve({
                        status: true,
                        message: 'Screen added'
                    })
                }
            })
            .catch(err => {
                console.log(err)
                reject({
                  status: false,
                  message: err
                })
            })
        })
    },

    deleteScreen(context, id) {
        return new Promise((resolve, reject) => {
            HTTP.get('api/screen/destroy/' + id)
            .then(res => {
                if(res.status == 200) {
                    context.commit('deleteScreen', id)
                    resolve(
                        {status: true, 
                        message: "Screen deleted"
                    })
                }
            })
            .catch(err => {
                reject({
                  status: false,
                  message: err
                })
            })
        })
    }
}

// mutations
const mutations = {
    setScreens(context, data) {
        context.screens = data
    },

    addScreen(context, content) {
        context.screens.push(content)
    },

    deleteScreen(context, id) {
        context.screens = context.screens.filter(elem => elem.id !== id)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}