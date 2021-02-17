import ApiProxy from './api-proxy.js';

export default {
	name: 'ComponentSession',
	props: ["globalarray"],
	data() {
		return {
			UserAuthDataRequestModel: {
				grant_type: 'password',
				username: null,
				password: null
			}
		}
	},
	methods: {
		// Общее событие для всех действий.
		OnClick(e) {
			let _This = this;
			console.clear();
		},
		// Авторизация.
		OnLogIn(e) {
			let _This = this;
			_This.OnClick(e);
			// Вход в систему.
			ApiProxy.LogIn(
				_This.UserAuthDataRequestModel,
				Data => {
					_This.globalarray.IsAuth = true;
					_This.$router.push('/');
				},
				Err => {
					//_This.ErrorRegMsg = Err.response.data.message;
				}
			);
		},
		// Получить информацию учетной записи.
		OnGetUserInfo(e) {

		}
	}
}