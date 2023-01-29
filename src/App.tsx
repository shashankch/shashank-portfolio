import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './components/Home';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <div className='App'>
       <QueryClientProvider client={queryClient}>
       <Home />
    </QueryClientProvider>

    </div>
  );
}

export default App;
