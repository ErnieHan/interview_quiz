const getCookie = name => {
    var value = '; ' + document.cookie
    var parts = value.split('; ' + name + '=')
    if (parts.length === 2) {
        return parts.pop().split(';').shift()
    }
}

const writeCookie = (name, value, days) => {
    let expires = ''
    if (days) {
        var date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = ';expires=' + date.toGMTString()
    }
    document.cookie = name + '=' + value.toString() + expires + ';path=/'
}

const deleteCookie = name => {
    var value = ''
    var days = -1
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    var expires = '; expires=' + date.toGMTString()
    document.cookie = name + '=' + value + expires + '; path=/'
}

export { getCookie, writeCookie, deleteCookie }
