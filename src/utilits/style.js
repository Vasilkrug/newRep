const changeColor = (item) => {
    if (item === 'Активен') {
        return 'green'
    } else if (item === 'В ожидании') {
        return '#ffd800'
    } else if (item === 'Отключен') {
        return 'red'
    }
}
export {changeColor}