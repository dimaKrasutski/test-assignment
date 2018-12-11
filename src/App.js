import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './store';
import './App.css';

import Home from './components/Home';
import Dogs from './components/Dogs';
import Carousel from './components/Carousel';
import CurrDog from './components/CurrDog';
import NotFound from './components/not-found/NotFound';

const store = ConfigureStore();

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App ">
          <div className="dark-overlay landing-inner text-dark">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dogs" component={Dogs} />
                    <Route exact path="/carousel" component={Carousel} />
                    <Route exact path="/currdog" component={CurrDog} />
                    <Route  component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

