import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import StateProvider from './providers/StateProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    // import the react router global
    // import context and state
    // link to html
    <BrowserRouter>
    <StateProvider>
        <App />
    </StateProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
