import React from 'react'
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Views
import Followers from './Pages/Followers/Followers';
import Repos from './Pages/Repos/Repos';
import Home from './Pages/Home/Home';
import NotFound from './Pages/Not Found/NotFound';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          
          <Route path="/" exact>
            <Home />
          </Route>
          
          <Route path="/followers/:user" exact>
            <Followers />
          </Route>

          <Route path="/Repos/:user" exact>
            <Repos />
          </Route>
          
          <Route path="*">
            <NotFound />
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
