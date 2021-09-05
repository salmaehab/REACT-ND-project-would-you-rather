import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import reducer from './reducers'
import middleware from './middleware'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(middleware))
const persistor = persistStore(store)
// const store = createStore(reducer, middleware)
ReactDOM.render(
 // <React.StrictMode>
  <Provider store={store}>
  <Router>
  <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Router>
    </Provider>,
 // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
