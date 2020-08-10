import React from 'react';
// import Main from './Main'

const Animals = (props) => {
  // const { image, type, name, description, animalId } = props.animals;
  return (
    <div
      class='ui three cards'
      style={{ marginRight: '7em', marginLeft: '7em', marginTop: '2em' }}
    >
      {props.animals.map((animal) => {
        const { image, type, name, description, animalId } = animal;
        return (
          <div
            key={animalId}
            class='ui raised card'
            style={{ marginBottom: '3em' }}
          >
            <div class='image'>
              <img src={image} alt='...' />
            </div>
            <div class='content'>
              <div class='name'>
                <span class='name'>{name}</span>
              </div>
              <div class='meta'>
                <span class='type'>{type}</span>
              </div>
              <div class='description'>{description}</div>
            </div>
            <div class='extra content'>
              <div class='ui three buttons'>
                <div class='ui basic green button'>Like</div>
                <div class='ui basic red button'>Dislike</div>
                <div class='ui basic blue button'>Discard</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Animals;
