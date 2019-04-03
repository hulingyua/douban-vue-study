import requst from 'superagent'
const state = {
    login_email: '',
    login_token: '',
    login_name: '',
    tempt_email: '',
    tempt_token: '',
    tempt_name: '',
}

const getters = {
    currentUser: state => {
        return {
            email: state.login_email,
            token: state.login_token,
            name: state.login_name,
        }
    }
}

const mutations = {
    updateData: (state, payload) => {
        switch (payload.name) {
            case 'email':
                state.tempt_email = payload.value
                break;
            case 'token':
                state.tempt_token = payload.value
                break;
            case 'name':
                state.tempt_name = payload.value
                break;
        
            default:
                console.log('updateData error')
                break;
        }
    },
    getLocalUser: state => {
        state.login_email = sessionStorage.getItem('email');
        state.login_token = sessionStorage.getItem('token');
        state.login_name = sessionStorage.getItem('name');
    },
    setUser: (state, payload) => {
        state.login_email = payload.email;
        state.login_token = payload.token;
        state.login_name = payload.name;
    },
    logout: state => {
        state.login_email = '';
        state.login_email = '';
        state.login_email = '';
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
    }
}

const actions = {
    /**
     * login
     * 
     */
    login: ({commit}, payload) => {
        requst
        .get('https://douban.herokuapp.com/user/' + payload.email)
        .set('Authorization', 'Bearer ' + payload.token)
        .then(res => {
          commit({
            type: 'setUser',
            email: res.body.email,
            token: res.body.token,
            name: res.body.name
          })
          resolve(res)
        }, err => {
          reject(err)
        })
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}