import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import { ConfigProvider } from 'antd'
import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#729CB2',
          borderRadius: 10,
          colorBgContainer: '#fff'
        }
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
)
