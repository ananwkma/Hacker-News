import React, { Component } from 'react';
import Flexbox from 'flexbox-react'
import '../styles/App.css'
import { Link, /*Route*/ } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {

  state = {
    titles: [],
    first: 0,
    last: 30,
    now: 0,
  }

  componentDidMount = () => {
    let now = parseInt((Date.now() + '').substring(0,10))
    this.setState({ now: now })
    let titles = Object.values(this.props.headlines).slice(this.state.first, this.state.last)
    this.setState({ titles: titles })
  }

  renderTitles = () => {
    const { now, titles, first, last } = this.state
    const { headlines } = this.props
    const vals = Object.values(headlines).slice(first, last)

    return ( <ol start={first+1} className="list">
        {vals.map(obj => (

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
      <Flexbox className="homeContainer"> 
          <Flexbox className="listContainer">
            {this.renderTitles()}
          </Flexbox>
          <button onClick={this.showMore} className="moreButton"> <h1 className="more"> More </h1> </button>
      </Flexbox>
    );
  }
}

function mapStateToProps ({ headlines, loading }, props) {
  return { headlines: headlines, loading: loading }
}

export default connect (mapStateToProps)(Home);
