// Сервисы.
import ServiceBusEvents from '../services/ServiceBusEvents.js';
// Модели.
import ModelUserAccount from '../models/UserAccount.js';


// Класс хранилища данных + события хранилища.
class ClassStore {
    constructor() {
        // Шина событий
        this.m_ServiceBusEvents = ServiceBusEvents.BusEvents;
        // Учетная запись (данные аутентификации).
        this.m_UserAccount = ModelUserAccount.UserAccount;
    };

    // Шина событий
    get BusEvents() {
        return this.m_ServiceBusEvents;
    }
    // Учетная запись (данные аутентификации).
    get UserAccount() {
        return this.m_UserAccount;
    }
}

// Экземпляр объекта хранилища.
let m_ClassStore = new ClassStore();

export default {
    BusEvents: m_ClassStore.BusEvents,
    Store: m_ClassStore
}