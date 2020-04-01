import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = configureStore();


ReactDom.render(
<ReduxProvider store={store}>
  <Router>
    <App />
  </Router>
</ReduxProvider>, document.getElementById('app')
);