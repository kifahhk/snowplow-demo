import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Page1 from './page1';
import Page2 from './page2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
					<Link to="/page1">Go To Page One</Link>
					<Link to="/page2">Go To Page Two</Link>
        </header>
        <section className="App-intro">
					<Switch>
						<Route
							exact
							path='/page1'
							component={Page1}
						/>
						<Route
							exact
							path="/page2"
							component={Page2}
						/>
					</Switch>
        </section>
      </div>
    );
  }
}

export default App;
