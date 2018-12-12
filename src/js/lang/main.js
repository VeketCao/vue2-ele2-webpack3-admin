/**
 * Created by Veket on 2017/9/22.
 */
import VueI18n from 'vue-i18n'

/**element-ui自带语言**/
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';
import elementJaLocale from 'element-ui/lib/locale/lang/ja';

/**自定义语言**/
import zhLocale from './zh';
import enLocale from './en';
import jaLocale from './ja';

import CST from '../lib/const/main.js';

Vue.use(VueI18n)

const messages = {
    zh: {
        ...zhLocale,
        ...elementZhLocale
    },
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    ja: {
        ...jaLocale,
        ...elementJaLocale
    }
}

/**
 * options: en | zh | ja
 * @type {plugin}
 */
const i18n = new VueI18n({
    locale: localStorage.getItem(CST.LANG) ||'zh',
    messages
})

export default i18n
