const languages = [ 'en', 'zh' ]
const catalogs = {
  en: { messages: require('./locales/en/messages.json') },
  zh: { messages: require('./locales/zh/messages.json') }
}

const defaultLanguage = 'en'

const prefix = (lang) => (lang === defaultLanguage ? '/' : '/' + lang)
const deprefix = (pathname) => (pathname.startsWith('/en/') ? pathname.substr(4) : pathname)
const langFromPath = (pathname) => (pathname.startsWith('/zh/') ? 'zh' : 'en')

exports.defaultLanguage = defaultLanguage
exports.languages = languages
exports.catalogs = catalogs
exports.prefix = prefix
exports.deprefix = deprefix
exports.langFromPath = langFromPath
