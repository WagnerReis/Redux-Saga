import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div>

      </div>
    </Provider>
  )
}

export default App
