import axios from 'axios';
import Settings from '../conf/settings-global.js';

// Глобальные настройки.
let SettingsGlobal = Settings.SettingsGlobal;

// Сервис запросов к API.
class ClassServiceAxios {
	//
	constructor() {
		this.m_AxiosApi = axios.create({
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "origin, x-requested-with, content-type, application/json, accept, */*",
				"Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS"
			}
		});
		this.m_AxiosApiAuth = axios.create({
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		});
	}

	// POST запрос к контроллеру авторизации.
	PostApiAuth(Action, Request, Try, Cath) {
		let _URL = SettingsGlobal.UrlApiOAuth + Action;
		return this.m_AxiosApiAuth
			.post(_URL, Request, {
				withCredentials: true
			})
			.then(response => {
				if (Try) Try(response.data);
			})
			.catch(err => {
				if (Cath) Cath(err)
			});
	};

	// POST запрос к API контроллерам.
	PostApi(Controller, Action, Request, Try, Cath) {
		let _URL = SettingsGlobal.UrlApi + Controller + "/" + Action;
		return this.m_AxiosApi
			.post(_URL, Request, {
				withCredentials: true
			})
			.then(response => {
				if (Try) Try(response.data);
			})
			.catch(err => {
				if (Cath) Cath(err)
			});
	};
}

// Сервис запросов к API.
let ServiceAxios = new ClassServiceAxios();

export default {
	ServiceAxios
}