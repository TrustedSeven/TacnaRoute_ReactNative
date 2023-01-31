import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import MainNavigator from './src/navigator/MainNavigator';
import {AuthProvider} from './src/AuthProvider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
