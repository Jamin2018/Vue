import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import newsCom from '../views/newsCom.vue'
// import weatherCom from '../views/weatherCom.vue'
// 这种也行
import weatherCom from '@/views/weatherCom.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
	  path: '/about',
	  name: 'About',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/news/:id',
		component: newsCom
	},
	{
		path: '/weather/:city',
		component: weatherCom
	},
	{
		path: '/hello',
		component: HelloWorld
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
