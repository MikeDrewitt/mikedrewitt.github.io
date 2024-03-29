import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import initialState from './initialState'
import rootReducer from './reducers'

export const composeEnhancers = window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

function configureStore() {
  const store = createStore(rootReducer, initialState, composeWithDevTools())

  return store
}

const store = configureStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
