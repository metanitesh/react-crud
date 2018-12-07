import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const courses =  [{
  title : "Learn Js",
  author : "Nitesh",
  category: "Javascript",
  length: 10,
}, {
  title : "Learn Python",
  author : "Shantu",
  category: "go",
  length: 20,
}]


const store = createStore(rootReducer, 
  applyMiddleware(thunk)
  );


  
ReactDOM.render((

  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
