import {combineReducers} from 'redux'
import modules from './modules'

export default function createRootReducers() {
  return combineReducers({
    ...modules
  })
}
