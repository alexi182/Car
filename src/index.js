import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import Layout from './layout/Layout';

let page = document.getElementById('page');

ReactDOM.render(
    <Provider store={store}>
       <Layout />
    </Provider>
    , page
);






