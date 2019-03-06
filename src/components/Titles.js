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
							.then((result) => { 
								this.setState({ titles: [...this.state.titles, { id: result.id, title: result.title } ] })
							})
					})
				)
		)
	}

	renderTitles = () => {
		const { titles } = this.state
		return ( <ul>
				{Object.values(titles).map(obj => (
						<li key={obj.id}>{obj.title}</li>
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
