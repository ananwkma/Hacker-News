import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../styles/Footer.css'
import { Link, /*Route*/ } from 'react-router-dom'

class Footer extends Component {
	render() {
		return (
			<Flexbox className="footer">
				<hr/>
				<h2> Applications are open for YC Summer 2019 </h2>
				<Flexbox className="linksContainer">
				  <Link to='/' className="link"> <h3> Guidelines </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> FAQ </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> Support </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> API </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> Security </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> Lists </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> Bookmarklet </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> Legal </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> Apply to YC </h3> </Link> <h3> | </h3>
				  <Link to='/' className="link"> <h3> Contact </h3> </Link>
				</Flexbox>
				<Flexbox className="searchBarContainer">
				  <h1> Search: </h1> 
				  <form> 
				    <input type="text"/>
				  </form>
				</Flexbox>
			</Flexbox>
		)
	}
}

export default Footer;