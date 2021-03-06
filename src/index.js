import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import rootReducer from './Reducers/Root';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
    composeEnhancers()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
