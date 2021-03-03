import {HTTP} from '@/plugins/axios'
// initial state
const state = () => ({
    content: [],
})

// getters
const getters = {
    content: state => state.content,
}

// actions
const actions = {
    getContent(context) {
        HTTP.get('/api/content')
        .then(res => context.commit('setContent', res.data))
    },

    addContent(context, data) {
        return new Promise((resolve, reject) => {
            HTTP.post('api/content/store', data)
            .then(res => {
                if(res.status == 201) {
                    context.commit('addContent', res.data)
                    resolve({
                        status: true,
                        message: 'Content added'
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

    deleteContent(context, id) {
        return new Promise((resolve, reject) => {
            HTTP.get('api/content/destroy/' + id)
            .then(res => {
                if(res.status == 200) {
                    context.commit('deleteContent', id)
                    resolve({status: true, message: "Content deleted"})
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
    setContent(context, data) {
        context.content = data
    },

    addContent(context, content) {
        context.content.push(content)
    },

    deleteContent(context, id) {
        context.content = context.content.filter(elem => elem.id !== id)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}