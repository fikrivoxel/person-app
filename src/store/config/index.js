import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createRootReducers from '../reducers'

const config = {
  key: 'person-app',
  storage,
  whitelist: ['person'],
  blacklist: ['*']
}
const rootReducers = createRootReducers()

const configureStore = function (initState) {
  let middleware = [], enhancers = []
  middleware.push(thunk)
  let logger = createLogger({
    level: 'info',
    collapsed: true
  })
  middleware.push(logger)
  enhancers.push(applyMiddleware(...middleware))
  let composeEnhancers = compose
  let enhancer = composeEnhancers(...enhancers)
  let reducers = persistReducer(config, rootReducers)
  return createStore(reducers, initState, enhancer)
}

const configurePeristor = function (store) {
  return persistStore(store)
}

export const store = configureStore()
export const persistor = configurePeristor(store)
