import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyles';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import './index.css';

const theme = {
  colors: {
    main: '#3470FF',
    header: '#153834',
    backgraund: '#fff',
    active:'#c70e38',
    text:'#232323',
    input:'#edb234',
    acent:'#0B44CD',
  },
  spacing: value => `${value*4}px`,
  radius: {
    m: '12px',
  },
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
