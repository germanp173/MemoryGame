import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard';
import cards from './cards.json';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards,
      score: 0,
      topScore: 0,
      result: ""
    }
  }

  render() {
    return (
      <div>
        <ScoreBoard score={this.state.score} topScore={this.state.topScore} result={this.state.result} />
        <GameBoard>
          {
            this.state.cards.map(card => (
              <Card id={card.id} 
                    key={card.id} 
                    image={card.image}
                    name={card.name}
                    clickHandler={this.handleImageClick}/>
            ))
          }
        </GameBoard>
      </div>
    );
  }

  handleImageClick = id => {
    if (this.state.score === 0){
      this.setState({
        result: ""
      });
    }

    // Search cards array for the card that was clicked.
    for (var i in cards){
      let card = cards[i];
      if (card.id === id){
        // Check if card was already clicked.
        if (card.clicked === true){
          this.resetGame();
        } else {
          // Update card clicked state.
          card.clicked = true;
          this.incrementScore();
          this.setState({
            cards: this.shuffle(this.state.cards)
          });
        }
        break;
      }
    }
  }
  
  incrementScore = () => {
    this.setState({
      score: this.state.score + 1,
    }, function(){
      // Update top score if neccessary.
      if (this.state.score > this.state.topScore){
        this.setState({
          topScore: this.state.score
        });
      }
  
      // Reset game if player successfully selected all cards.
      if (this.state.score === this.state.cards.length){
        this.resetGame();
      }
    });
  }
  
  shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
  
  resetGame = () => {
    // Reset state of all cards.
    let resetCards = this.state.cards.map(card => {
      card.clicked = false;
      return card;
    });

    this.setState({
      result: this.state.score === this.state.cards.length ? "You Won!" : "You Lost!",
      score: 0,
      cards: this.shuffle(resetCards)
    });
  }
}

export default App;