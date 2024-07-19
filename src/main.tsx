import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import App from './App.tsx'
import './index.css'
import Properties from './views/properties/properties.tsx'
import PropertyDetailProvider from './context/propertyDetailContext.tsx'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Properties/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PropertyDetailProvider>
        <RouterProvider router={router} />
      </PropertyDetailProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
