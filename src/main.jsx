import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import { usersReducer } from './stores/reducers/user-reducer'

const userStore = createStore(usersReducer,{users:[]})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={userStore} >
    <App />
  </Provider>
)
