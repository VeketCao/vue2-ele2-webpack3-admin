import axios from 'axios'

//处理特殊错误
axios.defaults.validateStatus=(status)=>{
    if (status === 403) {//无权限访问资源
        console.log('status',status)
        return false;
    } else if (status === 401) {//用户未登录或者登录已超时
        console.log('status',status)
        return false;
    }else if(status === 404){
        console.log('status',status)
        return false;
    }else return true;
}

const base_options = {
    withCredentials: true,
    timeout: 10000,
    headers: { 'content-type': 'application/json' }
}

// create an axios instance
const http = axios.create(base_options);


export default http