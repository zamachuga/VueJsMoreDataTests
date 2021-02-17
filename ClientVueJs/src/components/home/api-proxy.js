// Сервисы.
import Services from '../../services/ServiceAxios.js';

// Контроллер учетных записей.
let _AuthController = "Dict";

// Действие "Получить список групп".
let _ActionGetGroups = "GetGroups";

export default {
	// Аутентификация.
	GetGroups(Request, Try, Cath) {
		Services.ServiceAxios.PostApi(_AuthController, _ActionGetGroups, Request, Try, Cath);
	}
};