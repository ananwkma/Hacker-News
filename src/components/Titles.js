import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../App.css'

class Titles extends Component {

	state = {
		titles: [],
	}

	componentDidMount = () => {
		fetch("https://hacker-news.firebaseio.com/v0/topstories.json") 
			.then((result) => result.json(result))
			.then((idArray) => (
					idArray.map(id => (
						fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
							.then((result) => result.json(result))
							.then((result) => { 
								this.setState({ titles: [...this.state.titles, { id: result.id, title: result.title } ] })
							})
					))
				)
		)
	}

	renderTitles = () => {
		const { titles } = this.state
		return ( <ol>
				{Object.values(titles).map(obj => (
						<li className="list" key={obj.id}>{obj.title}</li>
				))}
			</ol>
		)
	}

  render() {
    return (
    	<Flexbox className="container"> 
    		<Flexbox className="orangeBar">
    			<img className="logo" src="../../images/logo.png" alt="logo"/>
    			<h1> HackerNews </h1> 
    			<h2> new </h2>
					<h2> past </h2>
					<h2> comments </h2>
					<h2> ask </h2>
					<h2> show </h2>
					<h2> jobs </h2>
					<h2> submit </h2>
    		</Flexbox>
    		<Flexbox className="listContainer">
    			{this.renderTitles()}
    		</Flexbox>
    	</Flexbox>
    );
  }
}



export default Titles;
