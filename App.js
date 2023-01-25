import React, {useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import MainNavigator from './src/navigator/MainNavigator';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <MainNavigator />
    </QueryClientProvider>
  );
};

export default App;
