import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends React.Component {
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
            score: this.state.score + 1;
            message: "correct!";
            shakeit: false;
          });
        }
  }
}
export default App;
