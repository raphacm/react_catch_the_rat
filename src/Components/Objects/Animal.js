import React from 'react';

const Animal = (props) => {
  let coordinates = {};
  let orientation = -1;

  if (props.hunterCoord) {
    let intersect_x = props.hunterCoord.hunterX - props.hunterCoord.preyX;
    let intersect_y = props.hunterCoord.hunterY - props.hunterCoord.preyY;

    if (intersect_x > -100) {
      orientation = 1;
    } else {
      orientation = -1;
    }

    coordinates.x = props.hunterCoord.hunterX;
    coordinates.y = props.hunterCoord.hunterY;
  }

  if (props.preyCoord) {
    let intersect_x = props.preyCoord.preyX - props.preyCoord.hunterX;
    let intersect_y = props.preyCoord.preyY - props.preyCoord.hunterY;
    let isInterpectedX = (intersect_x >= -100 && intersect_x <= 100) ? true : false;
    let isInterpectedY = (intersect_y >= -100 && intersect_y <= 100) ? true : false;

    if (intersect_x > -100) {
      orientation = 1;
    } else {
      orientation = -1;
    }

    if (isInterpectedX && isInterpectedY) {
       props.teste();
    } else {
      coordinates.x = props.preyCoord.preyX;
      coordinates.y = props.preyCoord.preyY ;
    }
  }

 return (
    <div>
      <img src={props.img} style={{ transform: `scaleX(${orientation})`, width: 100, position: 'absolute', left: coordinates.x, top: coordinates.y }} />
    </div>
  );
}

export default Animal;
