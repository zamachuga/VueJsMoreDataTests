export default {
	name: 'ComponentInfoAccount',
	props: ["store"],
	activated() {},
	methods: {
		// Общее событие для всех действий.
		OnClick(e) {
			let _This = this;
			console.clear();
		},
		// Обновить.
		OnRefresh: function (event) {
			let _This = this;
			_This.OnClick(e);
			// Получить информацию по учетной записи.
			ApiProxy.GetUserInfo(
				null,
				Data => {
					//_This.ErrorRegMsg = "Информация учетной записи получена.";
				},
				Err => {
					//_This.ErrorRegMsg = Err.response.data.message;
				}
			);
		}
	}
}