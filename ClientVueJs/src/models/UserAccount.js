// Класс учетной записи пользователя.
class ClassUserAccount {
    constructor() {
        // Имя учетной записи.
        this.m_UserName = null;
        // Время входа (аутентификации).
        this.m_LogInTime = null;
        // Последняя активность.
        this.m_LastActiveTime = null;
        // Время окончания сессии.
        this.m_ExpireTime = null;
        // ФИО.
        this.m_FIO = null;
        // Должность.
        this.m_Staffpos = null;
    };

    // Имя учетной записи.
    get UserName() {
        return this.m_UserName;
    }
    // Время входа (аутентификации).
    get LogInTime() {
        return this.m_LogInTime = null;
    }
    // Последняя активность.
    get LastActiveTime() {
        return this.m_LastActiveTime = null;
    }
    // Время окончания сессии.
    get ExpireTime() {
        this.m_ExpireTime = null;
    }
    // ФИО.
    get FIO() {
        this.m_FIO = null;
    }
    // Должность.
    get Staffpos() {
        this.m_Staffpos = null;
    }
}

// Экземпляр объекта хранилища.
let m_ClassUserAccount = new ClassUserAccount();

export default {
    UserAccount: m_ClassUserAccount
}