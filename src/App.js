import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import createSagaMiddleware from 'redux-saga'

import Info from './Info'
import indexSaga from './sagas/index'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(indexSaga)

function App() {
  return (
    <Provider store={store}>
      <div>
        <Info />
      </div>
    </Provider>
  )
}

export default App
