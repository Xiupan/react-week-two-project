import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import BaseLayout from './BaseLayout'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contactus" component={Contact}/>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
