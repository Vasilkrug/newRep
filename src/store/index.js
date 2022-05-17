import {createStore} from 'vuex';


export const store = createStore({
    state: {
        servers: [
            {
                id: 104,
                method: 'Cabinet',
                status: 'В ожидании',
                ip: '135.181.162.244',
                date: new Date().toLocaleDateString()
            },
            {
                id: 201,
                method: 'Api',
                status: 'Активен',
                ip: '135.181.162.244',
                date: new Date().toLocaleDateString()
            },
            {
                id: 241,
                method: 'Core',
                status: 'Отключен',
                ip: '135.181.162.244',
                date: new Date().toLocaleDateString()
            },
            {
                id: 297,
                method: 'Notify',
                status: 'Активен',
                ip: '135.181.162.244',
                date: new Date().toLocaleDateString()
            },
        ],
        links: [
            {url: '/account', name: 'Личный кабинет', img: require('@/assets/images/account.png')},
            {url: '/servers', name: 'Cерверы', img: require('@/assets/images/server.png')},
            {url: '/settings', name: 'Настройки', img: require('@/assets/images/settings.png')},
        ],
        activeLink: 'Личный кабинет',
        showModal: false,
    },
    mutations: {
        ACTIVE_PAGE: (state, payload) => {
            if (payload) {
                state.activeLink = payload;
            }
        },
        DELETE_SERVER: (state, payload) => {
            state.servers = state.servers.filter(item => item.id !== +payload)
            localStorage.setItem('servers', JSON.stringify(state.servers))
        },
        IS_MODAL_VISIBLE: (state) => {
            state.showModal = !state.showModal
        },
        INITIAL_STORE(state) {
            if (localStorage.getItem('servers')) {
                state.servers = JSON.parse(localStorage.getItem('servers'))
            }
        }
    },
    getters: {
        ACTIVE_ITEM_SERVER: (state) => (itemId) => {
            return state.servers.find(el => el.id === +itemId)
        },
        QUANTITY_OF_SERVERS: (state) => {
            return state.servers.length
        },
    },
})


