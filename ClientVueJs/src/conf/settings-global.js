// Глобальные настройки.
class ClassSettingsGlobal {
	// Базовый URL к API
	get UrlApi() {
		return 'http://localhost/api/';
	};
	// Базовый URL к API OAuth
	get UrlApiOAuth() {
		return 'http://localhost/OAuth/';
	};
}

var SettingsGlobal = new ClassSettingsGlobal();

export default {
	SettingsGlobal
}