import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { loadCourses } from './components/actions/todoActions'; 
import { loadAuthors } from './components/actions/authorActions'; 

import registerServiceWorker from './registerServiceWorker';
import store from './components/store/configureStore'; 
import { Provider } from 'react-redux'; 

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

store.dispatch(loadCourses());
store.dispatch(loadAuthors())

ReactDOM.render(
    <Provider store={store}>
          <BrowserRouter basename={baseUrl}>
            <App />
          </BrowserRouter>
    </Provider>,      
    rootElement);
      
      registerServiceWorker();
