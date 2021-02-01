import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers/index'
import ReduxThunk from 'redux-thunk'

export const middlewares = [ReduxThunk]
export const createStoreWithMidlleware = applyMiddleware(...middlewares)(
  createStore
)
export const store = createStoreWithMidlleware(RootReducer)
