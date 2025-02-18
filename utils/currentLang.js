import {lang} from '../languages/lang.js'

export function currentLang () {
  return lang[process.env.APP_LANGUAGE]
}
