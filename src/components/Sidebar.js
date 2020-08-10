import React from 'react';

const Sidebar = (props) => {
  return (
    <div>
      {props.liked.map((animal) => {
        const { image, type, name, description, animalId } = animal;
        return (
          <div key={animalId} class='ui raised card'>
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
          </div>
        );
      })}
    </div>
  );
};
export default Sidebar;
