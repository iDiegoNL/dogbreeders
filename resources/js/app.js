// Vue stuff
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// Views
import App from './views/App'
import Hello from './views/Hello'
import Home from './views/Home'

// Buefy and Bulma
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
