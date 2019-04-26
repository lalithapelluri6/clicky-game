import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureCard from "./components/picturecard";
import Wrapper from "./components/wrapper";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };
  clickPicture = id => {
    const shuffledArray = this.shuffleArray(cards);
    this.setState({cards: shuffledArray});
        if(this.state.clickedArray.includes(id)){
          this.setState({ score: 0, clickedArray: [], message: "Incorrect!! game over click an image to start again!", shakeit: "true"});
        } else {
          this.setState({clickedArray: this.state.clickedArray.concat([id]),
            score: this.state.score + 1,
            message: "correct!",
            shakeit: false
          });
        }
        if(this.state.score >this.state.topScore){
          this.setState({topScore: this.state.score});
        }
  }
  shuffleArray = (picturesArray) => {
    for(let i=0; i<picturesArray.length; i++){
      const j= Math.floor(Math.random() * (i+1));
      [picturesArray[i],picturesArray[j]] = [picturesArray[j], picturesArray[i]];
    }
    return picturesArray;
  }
  render() {
    return (
        <div className = "App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Clicky Game!!</h1>
          </header>
          <h3 className = "App-intro">
            <strong>Click Image to earn points,but don't click on any,more than once!</strong>
              <p className="score"><strong>score:{this.state.score} | TopScore:{this.state.topScore}</strong></p>
              <p className="message"><strong>{this.state.messgae}</strong></p>
          </h3>
            <Wrapper
                shakeWrapper = {this.state.shakeit}
                pictures =
                {this.state.cards.map(picture => (
                    <PictureCard
                       clickPicture={this.clickPicture}
                       id={picture.id}
                    key={picture.id}
                    name={picture.name}
                    image={picture.image}
                    />
                ))}
                />
                <footer className="footer">
                    <div className="container">
                        <span className="text">&copy;Lalitha - ClickyGame - React app.</span>
                    </div>
                </footer>
        </div>
    );
  }
}

export default App;
