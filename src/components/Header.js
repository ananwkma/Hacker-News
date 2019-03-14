import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../styles/Header.css'
import { Link, /*Route*/ } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
	        <Flexbox className="orangeBar">
	          <Link to='/' className="link"> <img className="logo" src="../../images/logo.png" alt="logo"/> </Link>

	          <Link to='/' className="homeLink"> <h1> Hacker News </h1> </Link> 
	          <Link to='/' className="link"> <h2> new </h2> </Link> <h2> | </h2>
	          <Link to='/' className="link"> <h2> past </h2> </Link> <h2> | </h2>
	          <Link to='/' className="link"> <h2> comments </h2> </Link> <h2> | </h2>
	          <Link to='/' className="link"> <h2> ask </h2> </Link> <h2> | </h2>
	          <Link to='/' className="link"> <h2> show </h2> </Link> <h2> | </h2>
	          <Link to='/' className="link"> <h2> jobs </h2> </Link> <h2> | </h2>
	          <Link to='/' className="link"> <h2> submit </h2> </Link> 
	          <Link to='/' className="login"> <h2> login </h2> </Link> 
	        </Flexbox>
		)
	}
}

export default Header;