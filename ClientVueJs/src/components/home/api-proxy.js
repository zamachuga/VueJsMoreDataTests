// Сервисы.
import Services from '../../services/ServiceAxios.js';

// Контроллер учетных записей.
let _AuthController = "Auth";

// Действие "Аутентификация".
let _ActionLogIn = "LogIn";
// Действие "Получить информацию учетной записи".
let _ActionGetUserInfo = "GetUserInfo";

export default {
	// Аутентификация.
	LogIn(Request, Try, Cath) {
		Services.ServiceAxios.PostApi(_AuthController, _ActionLogIn, Request, Try, Cath);
	},
	// Получить информацию учетной записи.
	GetUserInfo(Request, Try, Cath) {
		Services.ServiceAxios.PostApi(_AuthController, _ActionGetUserInfo, Request, Try, Cath);
	}
};