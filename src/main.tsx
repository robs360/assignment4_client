import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.tsx'
import { store } from './Redux/store.ts'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
      </Provider>
  </StrictMode>,
)
