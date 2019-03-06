import React, { Component } from 'react';

class Titles extends Component {

	state = {
		titles: [],
	}

	componentDidMount = () => {
		fetch("https://hacker-news.firebaseio.com/v0/topstories.json") 
			.then((result) => result.json(result))
			.then((idArray) => (
					idArray.map(id => {
						let URL = ("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
						fetch(URL)
							.then((result) => result.json(result))
							.then((result) => this.setState({titles: [...this.state.titles, result.title]}))
					})
				)
		)
	}

	renderTitles = () => {
		const { titles } = this.state
		return ( <ul>
				{titles.map(title => (
						<li>{title}</li>
				))}
			</ul>
		)
	}

  render() {
    return (
    	<div> 
    		{this.renderTitles()}
    	</div>
    );
  }
}

export default Titles;
