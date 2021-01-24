import React from 'react';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import List from './containers/List'
import Product from './containers/Product'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={List}/>
          <Route path='/product' component={Product} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
