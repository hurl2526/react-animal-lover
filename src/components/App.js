import React, { Component } from 'react';
import Animals from './Animals';
import Header from './Header';
import animals from '../data/data';
import Sidebar from './Sidebar'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: animals,
      liked: [],
      disliked: [],
      searchTerm: '',
    };
  }

  handleLiked = (id) => {
    let like = this.state.animals.filter((animal) => animal.animalId === id);
    const newLiked = [like, ...this.state.liked];
    this.setState({
      liked: newLiked,
    });
  };

  handleDisliked = (id) => {
    let disLike = this.state.animals.filter((animal) => animal.animalId === id);
    const newDisliked = [disLike, ...this.state.disliked];
    this.setState({
      liked: newDisliked,
    });
  };

  handleDiscard = (id) => {
    const newAnimals = this.state.animals.filter(
      (animal) => animal.objectId !== id
    );
    const newDislike = this.state.dislike.filter(
      (animal) => animal.objectId !== id
    );
    const newLiked = this.state.like.filter((animal) => animal.objectId !== id);
    this.setState({
      animals: newAnimals,
      liked: newLiked,
      dislike: newDislike,
    });
  };

  render() {
    return (
      <div>
        <hr style={{ marginTop: '3em' }} />
        <Header />
        {/* <Search /> */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Animals
            animals={this.state.animals}
            handleLiked={this.handleLiked}
            handleDisLiked={this.handleDisLiked}
            handleDiscard={this.handleDiscard}
          />
          <Sidebar animals={this.state.animals} liked={this.state.liked} disliked={this.state.disliked} />
        </div>
      </div>
    );
  }
}

export default App;
