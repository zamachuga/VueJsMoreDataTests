import Vue from 'vue';

// Экземпляр Vue для создания глобальной шины событий.
let m_BusEvents = new Vue();

export default {
    BusEvents: m_BusEvents
}