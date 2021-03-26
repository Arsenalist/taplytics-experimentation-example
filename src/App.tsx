import React from 'react';
import './App.css';
import RestApiExample from './RestApiExample'
import JsApiExample from "./JsApiExample";
import {
    Switch,
    Route,
    BrowserRouter  as Router,
    Link
} from "react-router-dom";
function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">Experimentation</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={'nav-link'} to="/js-api-example">JS API</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={'nav-link'} to="/rest-api-example">REST API</Link>
                        </li>
                    </ul>
                </div>
            </nav>
      <div>
          <Switch>
              <Route path="/js-api-example">
                  <JsApiExample />
              </Route>
              <Route path="/rest-api-example">
                  <RestApiExample />
              </Route>
          </Switch>
      </div>
        </Router>
  );
}

export default App;
