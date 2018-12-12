import http from './http/main'

/**配置url前缀**/
let base_url = 'http://localhost:5000'

/**定义接口**/
export default {
    login(username, password) {
        return http({
            url: `${base_url}/login`,
            method: 'post',
            data:{
                username,
                password
            }
        })
    },
    logout() {
        return http({
            url: `${base_url}/logout`,
            method: 'get'
        })
    }
}