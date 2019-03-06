import React, { Component } from 'react';

class Titles extends Component {

	state = {
		titles: [],
	}

	renderTitles = () => {
		this.state.titles.map((title) => (
			<li>title</li>
		))
	}

	getTitles = () => {
		fetch(("https://hacker-news.firebaseio.com/v0/topstories.json") 
			.then((result) => result.json(result))
			.then((idArray) => 
				console.log(idArray)
				fetch(("https://hacker-news.firebaseio.com/v0/item/121003.json"))
					.then((result) => result.json())
					.then((result) => this.setState(...this.state.titles, result.title))
			)
		)
		this.renderTitles();

	}

  render() {
    return (
    	<div> 
    		{this.getTitles}
    	</div>
    );
  }
}

export default Titles;
