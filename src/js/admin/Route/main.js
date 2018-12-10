/**
 * Created by Veket on 2018/12/10.
 */
import VueRouter from 'vue-router';

import Main from '../Main/main'
import Home from '../Main/Home/main'
import Login from '../Login/main';

Vue.use(VueRouter);

const routesMap = [
    {
        path: '/',redirect:'/m',
    },
    {
        path:'/login',
        name:'login',
        component:Login,
    },
    {
        path:'/m',
        name:'menus',
        component:Main,
        redirect: '/m/home',
        children:[
            {
                path: '/m/home',
                name: 'home',
                component: Home
            }
        ]
    },

];

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routesMap
});
/*
router.beforeEach((to, from, next) => {
    let needLogin = ()=>{
        let rtn = false;
        if(to.path.indexOf('trade')!=-1 || to.path.indexOf('finance')!=-1 ||to.path.indexOf('security')!=-1) rtn = true;
        return rtn;
    };

    if(needLogin() && _.isEmpty(sessionStorage.getItem('user'))){
        //打开需要登录才能打开的模块，如果未登录则跳转到登录界面
        next({path:'/login'});
    }else{
        next();
    }


});*/

export default router