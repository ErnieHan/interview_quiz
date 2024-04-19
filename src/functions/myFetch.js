import { CAS_HOST_URL } from '../constants'

const alertAndLogout = () => {
    window.ALERT_AND_LOGOUT_FLAG = true
    alert('連線超時， 您即將被登出')
    window.location.href = `${CAS_HOST_URL}/cas/logout?service=${window.location.origin}/rolex-management`
}

export const myFetch = (url, options) => {
    if (typeof options === undefined) options = {}
    options.redirect = 'manual'
    return fetch(url, options)
        .then(response => {
             if (response.type == 'opaqueredirect') {
                 alertAndLogout()
             } else {
                 return response
             }
        })
        .catch(e => {
            console.log('request catch error e.message: ' + e.message)
            if (!e.message.includes('aborted')) {
                alertAndLogout()
            }
        })
}
