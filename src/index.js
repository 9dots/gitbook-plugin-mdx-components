import markedx from 'markedx'
import * as components from './components'
import forEach from '@f/foreach'

forEach((val, key) => markedx.component(key, val), components)
