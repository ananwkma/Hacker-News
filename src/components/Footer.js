import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../App.css'

class Footer extends Component {
	render() {
		return (
			<Flexbox className="footer">
				<hr/>
				<h2> Applications are open for YC Summer 2019 </h2>
				<Flexbox className="linksContainer">
				  <h3> Guidelines </h3> <h3> | </h3>
				  <h3> FAQ </h3> <h3> | </h3>
				  <h3> Support </h3> <h3> | </h3>
				  <h3> API </h3> <h3> | </h3>
				  <h3> Security </h3> <h3> | </h3>
				  <h3> Lists </h3> <h3> | </h3>
				  <h3> Bookmarklet </h3> <h3> | </h3>
				  <h3> Legal </h3> <h3> | </h3>
				  <h3> Apply to YC </h3> <h3> | </h3>
				  <h3> Contact </h3>
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