import Vue from 'vue';
import VueRouter from 'vue-router';
// Компоненты.
import ComponentHome from './components/home/component-home.vue';
import ComponentSession from './components/session/component-session.vue';
import ComponentInfoAccount from './components/infoaccount/component-infoaccount.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [{
			path: '/',
			name: 'Home',
			component: ComponentHome
		},
		{
			path: '/session',
			name: 'Session',
			component: ComponentSession
		},
		{
			path: '/infoaccount',
			name: 'InfoAccount',
			component: ComponentInfoAccount
		}
	]
})