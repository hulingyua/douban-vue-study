import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user'
import search from './modules/search'
import movie from './modules/movie'
import book from './modules/book'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        search,
        movie,
        book
    }
})