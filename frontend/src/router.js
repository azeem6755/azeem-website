import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";
import About from "./components/About";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: About
        },
    ]
})