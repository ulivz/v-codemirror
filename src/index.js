import VCodemirror from './V-Codemirror.js'
import themes from './config/theme'
import Codemirror from 'codemirror'
import { findMode } from './util'
import { modes, mimeModes } from 'codemirror'

function install(Vue) {
  Vue.component(VCodemirror.name, VCodemirror)
}

const findModeByMIME = Codemirror.findModeByMIME
const findModeByExtension = Codemirror.findModeByExtension
const findModeByFileName = Codemirror.findModeByFileName
const findModeByName = Codemirror.findModeByName

export {
  themes,
  // Current available modes
  modes,
  // Current available MIMEs
  mimeModes,
  install as default,
  VCodemirror,
  findMode,
  findModeByMIME,
  findModeByExtension,
  findModeByFileName,
  findModeByName
}
