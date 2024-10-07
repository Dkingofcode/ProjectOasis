import React from 'react';
import styled from 'styled-components';
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from '../../pizza-menu/src/ui/AppLayout';
import { QueriesObserver, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { toast, ToastContainer} from "react-toast";
import { Toaster } from 'react-hot-toast';

// isLoading(v4) = isPending(V5)

// cacheTIme(v4) = gcTime(v5)

const H1 = styled.h1`
font-size: 30px;
font-weight: 600;
`;

const Button = styled.button`
 border-radius: 5px;
 padding: 0.8rem 1.2rem;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

    <GlobalStyles  />
    <BrowserRouter>
     <Routes>
      <Route  element={<AppLayout />}>
      <Route index element={<Navigate replace to="dashboard"  />} />
      <Route path="dashboard" element={<Dashboard  />} />
      <Route path="bookings" element={<Bookings  />} />
      <Route path="cabins" element={<Cabins />} />
      <Route path="users" element={<Users  />} />
      <Route path="settings" element={<Settings  />} />
      <Route path="account" element={<Account  />} />
    </Route>
      <Route path="login" element={<Login  />} />
      <Route path="*" element={<Error  />} />
     </Routes>  
    </BrowserRouter>

    <Toaster 
      position='top-center'
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "var(--color-grey-0)",
          color: "var(--color-grey-700)",
        }
      }}
    />

    </QueryClientProvider>
    <ToastContainer  
      
    
     />
    </>
  )
}

export default App;
