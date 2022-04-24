
export const servers = [
    {id: 104, method: 'Cabinet', status: 'В ожидании', ip: '135.181.162.244', date: new Date().toLocaleDateString()},
    {id: 201, method: 'Api', status: 'Активен', ip: '135.181.162.244', date: new Date().toLocaleDateString()},
    {id: 241, method: 'Core', status: 'Отключен', ip: '135.181.162.244', date: new Date().toLocaleDateString()},
    {id: 297, method: 'Notify', status: 'Активен', ip: '135.181.162.244', date: new Date().toLocaleDateString()},
]

export const links = [
    {url: '/account', name: 'Личный кабинет', img: 'account.png'},
    {url: '/servers', name: 'Cерверы', img: 'server.svg'},
    {url: '/settings', name: 'Настройки', img: 'settings.svg'},
];
