import React from 'react';
import MaterialThemeProvider from './hooks/MaterialThemeProvider';
import Routes from './routes/routes';


function App() {

  return (
    <MaterialThemeProvider>
      <Routes />
    </MaterialThemeProvider>
  );
}

export default App;
