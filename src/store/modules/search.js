import request from 'superagent';
import jsonp from 'superagent-jsonp';
const state = {
    queryRes_movie: [],
    queryRes_book: [],
    queryRes_music: [],
    count: '3'
}

const mutations = {
    query(state, payload) {
        switch (payload.tag) {
            case 'movie':
                state.queryRes_movie = payload.res
                break;
            case 'book':
                state.queryRes_book = payload.res
                break;
            case 'music':
                state.queryRes_music = payload.res
                break;
            default:
                break;
        }
    },
    getMore(state) {
        state.count -= 0;
        state.count += 2;
    },
    initCount(state) {
        state.count = '3'
    }
}

const getters = {

}

const actions = {
    query: ({state, commit}, payload) => {
        request
        .get('https://api.douban.com/v2/movie/search?q=' +
        payload.queryStr + '&count=' + state.count)
        .use(jsonp)
        .end((err, res) => {
            if(!err) {
                commit({
                    type: 'query',
                    tag: payload.tag,
                    res: res.body.subjects
                })
            }
        })
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}