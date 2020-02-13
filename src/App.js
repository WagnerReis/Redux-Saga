import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import axios from 'axios'

import Info from './Info'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

  function *ola() {
    console.log('hello from saga')
    const dados = yield axios.get('http://httpbin.org/ip')
    console.log(dados)
  }

  sagaMiddleware.run(ola)

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
