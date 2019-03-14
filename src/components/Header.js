import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../App.css'

class Header extends Component {
	render() {
		return (
	        <Flexbox className="orangeBar">
	          <img className="logo" src="../../images/logo.png" alt="logo"/>
	          <h1> HackerNews </h1>
	          <h2> new </h2> <h2> | </h2>
	          <h2> past </h2> <h2> | </h2>
	          <h2> comments </h2> <h2> | </h2>
	          <h2> ask </h2> <h2> | </h2>
	          <h2> show </h2> <h2> | </h2>
	          <h2> jobs </h2> <h2> | </h2>
	          <h2> submit </h2>
	          <h3> login </h3>
	        </Flexbox>
		)
	}
}

export default Header;