import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <App /> 
            </Provider>
        </PersistGate>
    </BrowserRouter>
);
