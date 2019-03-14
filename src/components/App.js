import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom'
import { handleInitialData } from '../actions'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import Flexbox from 'flexbox-react'

class App extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  
  render() {

    const { loading } = this.props
    if (loading) return <h3> Loading... </h3>

    return (
      <div>
        <Router>
          <Flexbox className="container"> 
            <Header />
            <Flexbox className="contentContainer"> 
              <Home />
              <Footer />
            </Flexbox>
          </Flexbox>
        </Router>
      </div>
    );
  }
}

function mapStateToProps ({ headlines, loading }, props) {
  return { headlines: headlines, loading: loading }
}

export default connect(mapStateToProps)(App);
