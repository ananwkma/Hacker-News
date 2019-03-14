import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../App.css'
import Footer from './Footer'
import Header from './Header'

class Home extends Component {

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
        {Object.values(titles).slice(0, 30).map(obj => (
            <li className="list" key={obj.id}>{obj.title}</li>
        ))}
      </ol>
    )
  }

  render() {
    return (
      <Flexbox className="container"> 
        <Header />

        <Flexbox className="contentContainer"> 

          <Flexbox className="listContainer">
            {this.renderTitles()}
          </Flexbox>

          <h1 className="more"> More </h1>
          <Footer />

        </Flexbox>
      </Flexbox>
    );
  }
}



export default Home;
