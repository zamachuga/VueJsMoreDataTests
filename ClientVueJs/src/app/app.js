// Сервисы.
import ServiceStore from '../services/ServiceStore.js';
// Компоненты.
import ComponentNavi from '../components/navi/component-navi.vue';
import ComponentHome from '../components/home/component-home.vue';
import ComponentSession from '../components/session/component-session.vue';
import ComponentInfoAccount from '../components/infoaccount/component-infoaccount.vue';

export default {
	name: 'app',
	data() {
		return {
			store: {
				BusEvents: null,
				IsAuth: null
			}
		}
	},
	created() {
		this.store = ServiceStore.Store.BusEvents;
		this.store.IsAuth = true;
	},
	components: {
		ComponentNavi,
		ComponentHome,
		ComponentSession,
		ComponentInfoAccount
	}
}