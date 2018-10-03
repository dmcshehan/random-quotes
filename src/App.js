import React, { Component } from 'react'
import './App.css';
import {Quotes} from './quotes';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      Quote : Quotes[Math.floor(Math.random()*Quotes.length)]
    }
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote(){
    this.setState({
      Quote : Quotes[Math.floor(Math.random()*Quotes.length)]
    });
  }


  render() {
      const twitterMsg = '"' + this.state.Quote.quote + '"\n ' + this.state.Quote.author;
      const end = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+ encodeURIComponent(twitterMsg);
    return (
      <div id="quote-box" >
        <div className="wrapper">
          <p id="text" ><i className="fas fa-quote-left"></i>
            {this.state.Quote.quote}
          </p>
          <p id="author">-{this.state.Quote.author}</p>

          <div id="button-container">
            <a href={end}>
              <button id="tweet-quote">
                <i className="fab fa-twitter"></i>
              </button>
            </a>
            <button id="new-quote" onClick={this.newQuote}>
              New Quote
            </button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
