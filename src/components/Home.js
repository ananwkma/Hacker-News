import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../styles/App.css'
import Footer from './Footer'
import Header from './Header'
import { Link, Route } from 'react-router-dom'

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
                let hostname = ''
                if(result.url) {
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

  renderTitles = () => {
    const { titles } = this.state
    const now = Date.now()

    return ( <ol className="list">
        {Object.values(titles).slice(0, 30).map(obj => (
            <li className="listItem" key={obj.id}>
            
              <a href={obj.url} className="newsLink"> {obj.title} </a> 
              <Link to='/' className="hostnameLink"> {obj.trunc ? '('+obj.trunc+')' : null} </Link>
              <h1 className="details"> {obj.score} points by {obj.user} {obj.time} hours ago | hide | {obj.comments} comments </h1>

            </li>
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
          <Link to='/' className="moreLink"> <h1 className="more"> More </h1> </Link>
          <Footer />
        </Flexbox>
      </Flexbox>
    );
  }
}



export default Home;
