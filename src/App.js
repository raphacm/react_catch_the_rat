import React, { Component } from 'react';
import HunterPosition from './Components/Tracker/HunterPosition';
import catImage from './cat.png';
import ratImage from './rat.png';
import backgroundImage from './background.jpg';
import Animal from './Components/Objects/Animal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HunterPosition background={backgroundImage} render = {
            (animal, handlePreyPosition) => (
              <div>
                <Animal img={catImage} hunterCoord={animal} />
                <Animal img={ratImage} preyCoord={animal}  teste={handlePreyPosition} />
              </div>
            )
        }/>

      </div>
    );
  }
}

export default App;
