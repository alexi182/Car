import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import Index from './pages/Index/Index';
import ProductPage from './pages/Products/Products'

let page = document.getElementById('page');

ReactDOM.render(
    <Provider store={store} >
       <BrowserRouter>
          <Switch>
             <Route exact path="/" component={Index} />
             <Route exact path="/products" component={ProductPage} />
          </Switch>
       </BrowserRouter>
    </Provider>
    , page);






