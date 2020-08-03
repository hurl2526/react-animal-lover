import React, { Component } from 'react';
// import Main from './Main'
let animals = [
  {
    image: '/images/liger0.jpeg',
    type: 'liger',
    name: 'liger1',
    description: 'This is a Liger',
    animalId: '0',
  },
  {
    image: '/images/liger1.jpeg',
    type: 'liger',
    name: 'liger2',
    description: 'This is also a Liger',
    animalId: '1',
  },
  {
    image: '/images/liger2.jpeg',
    type: 'liger',
    name: 'liger3',
    description: 'This is a 3rd Liger',
    animalId: '2',
  },
  {
    image: '/images/vulture3.png',
    type: 'vulture',
    name: 'vulture1',
    description: 'This is a Vulture',
    animalId: '3',
  },
  {
    image: '/images/vulture4.jpeg',
    type: 'vulture',
    name: 'vulture2',
    description: 'This is also a Vulture',
    animalId: '4',
  },
  {
    image: '/images/vulture5.jpeg',
    type: 'vulture',
    name: 'vulture3',
    description: 'This is a 3rd Vulture',
    animalId: '5',
  },
  {
    image: '/images/panda6.jpeg',
    type: 'panda',
    name: 'panda1',
    description: 'This is a Panda',
    animalId: '6',
  },
  {
    image: '/images/panda7.jpeg',
    type: 'panda',
    name: 'panda2',
    description: 'This is also a Panda',
    animalId: '7',
  },
  {
    image: '/images/panda8.jpeg',
    type: 'panda',
    name: 'panda3',
    description: 'This is a 3rd Panda',
    animalId: '8',
  },
  {
    image: '/images/narwhal9.jpeg',
    type: 'narwhal',
    name: 'narwhal1',
    description: 'This is a Narwhal',
    animalId: '9',
  },
  {
    image: '/images/narwhal10.jpeg',
    type: 'narwhal',
    name: 'narwhal2',
    description: 'This is also a Narwhal',
    animalId: '10',
  },
  {
    image: '/images/narwhal11.jpeg',
    type: 'narwhal',
    name: 'narwhal3',
    description: 'This is a 3rd Narwhal',
    animalId: '11',
  },
];
class Animals extends Component {
  constructor() {
    super();
    this.state = {
      animals,
    };
  }

  render() {
    return (
      <div class='ui three cards' style={{marginRight:'7em', marginLeft:'7em',marginTop:'2em'}}>
          {this.state.animals.map((animal) => {
            const { image, type, name, description, animalId } = animal;
            return (
              <div key={animalId} class="ui raised card" style={{marginBottom:'3em'}}>
                <div class="image">
                  <img src={image}alt='...'/>
                </div>
                <div class="content">
                  <div class="name">
                    <span class="name">{name}</span>
                  </div>
                  <div class="meta">
                    <span class="type">{type}</span>
                  </div>
                  <div class="description">
                    {description}
                  </div>
                </div>
                <div class="extra content">
                  <div class="ui three buttons">
                    <div class="ui basic green button">Like</div>
                    <div class="ui basic red button">Dislike</div>
                    <div class="ui basic blue button">Discard</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    );
  }
}

export default Animals;
