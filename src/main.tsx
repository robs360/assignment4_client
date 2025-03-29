import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.tsx'
import { persistor, store } from './Redux/store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
      <RouterProvider router={routes}></RouterProvider>
      </Provider>
  </StrictMode>,
)
