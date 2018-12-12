/**
 * Created by Veket on 2018/12/7.
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index';

global.Vue = window.Vue = Vue;
global.Bus = window.Bus = new Vue();

export default {
  initElement(i18n){
    Vue.use(ElementUI,{
      size:'medium',
      i18n:(key,value) => i18n.t(key, value)
    });
  }
}