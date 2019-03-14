import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../styles/App.css'
import Footer from './Footer'
import Header from './Header'
import { Link, Route } from 'react-router-dom'

class Home extends Component {

  state = {
    titles: [],
    first: 0,
    last: 30,
    now: 0,
  }

  componentDidMount = () => {
    let now = parseInt((Date.now() + '').substring(0,10))
    this.setState({now: now})

    fetch("https://hacker-news.firebaseio.com/v0/topstories.json") 
      .then((result) => result.json(result))
      .then((idArray) => (
          idArray.map(id => (
            fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
              .then((result) => result.json(result))
              .then((result) => {
                let hostname = ''
                if (result.url) {
                  hostname = (new URL(result.url)).hostname.split('www.').join('');
                }
                this.setState({ titles: [...this.state.titles, { 
                  id: result.id, 
                  title: result.title,
                  url: result.url,
                  score: result.score,
                  user: result.by,
                  time: result.time,
                  comments: result.descendants,
                  trunc: hostname,
                }]})
              })
          ))
        )
    )
  }

  renderTitles = (first, last) => {
    const { titles, now } = this.state

    return ( <ol start={this.state.first+1} className="list">
        {Object.values(titles).slice(first, last).map(obj => (
            <li className="listItem" key={obj.id}>
            
              <a href={obj.url} className="newsLink"> {obj.title} </a> 
              <Link to='/' className="hostnameLink"> {obj.trunc ? '('+obj.trunc+')' : null} </Link>
              <h1 className="details"> {obj.score} points by {obj.user} {Math.floor((now - obj.time)/3600)} hours ago | hide | {obj.comments} comments </h1>

            </li>
        ))}
      </ol>
    )
  }

  showMore = () => {
    this.setState({ first: this.state.first + 30 })
    this.setState({ last: this.state.last + 30 })
  }

  render() {
    return (
      <Flexbox className="container"> 
        <Header />
        <Flexbox className="contentContainer"> 
          <Flexbox className="listContainer">
            {this.renderTitles(this.state.first, this.state.last)}
          </Flexbox>
          <button onClick={this.showMore} className="moreButton"> <h1 className="more"> More </h1> </button>
          <Footer />
        </Flexbox>
      </Flexbox>
    );
  }
}



export default Home;
