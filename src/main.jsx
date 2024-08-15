import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Router';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new queryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)