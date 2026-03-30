import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CountProvider } from './context/count-context.jsx'
import { Provider } from 'react-redux'
import { store } from './source/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CountProvider>
      <App />
    </CountProvider> */}
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>,
)
