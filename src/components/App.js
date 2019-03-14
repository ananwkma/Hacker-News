import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      	<Router>
        	<Home />
        </Router>
      </div>
    );
  }
}

export default App;
