import Router from 'vue-router';
import Vue from 'vue';
import Page from '../view/Page.vue'
import Home from '../view/Home.vue'
import Movie from '../view/Movie.vue'
import Group from '../view/Group.vue'
import Status from '../view/Status.vue'
import Book from '../view/Book.vue'
import Register from '../view/Register.vue'
import SearchReasult from '../view/SearchReasult.vue'
import Login from '../view/Login.vue'
import Subject from '../view/Subject.vue'


Vue.use(Router)
const router = new Router({
    routes: [{
        path: '/',
        redirect: '/pages/'
    },
    {
        path: '/pages',
        component: Page,
        children: [{
            path: '',
            redirect: '/pages/home'
        },{
            name: 'home',
            path: 'home',
            component: Home
        },{
            name: 'movie',
            path: 'movie',
            component: Movie
        },{
            name: 'group',
            path: 'group',
            component: Group
        },{
            name: 'status',
            path: 'status',
            component: Status
        },{
            name: 'book',
            path: 'book',
            component: Book
        },{
            name: 'register',
            path: 'register',
            component: Register
        },{
            name: 'login',
            path: 'login',
            component: Login
        },]
    },{
        name: 'searchReasult',
        path: '/search/:search',
        components: {
          default: Page,
          search2: SearchReasult
        }
    },{
        name: 'subject',
        path: '/subject',
        components: {
          default: Page,
          subject: Subject
        }
    }]
})
export default router;