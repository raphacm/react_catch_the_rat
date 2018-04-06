import React, { Component } from 'react';

export default class HunterPosition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hunterX: 0,
      hunterY: 0,
      //preyX: 0,
      //preyY: 0
    };

    this.handleHunterPosition = this.handleHunterPosition.bind(this);
    this.handlePreyPosition = this.handlePreyPosition.bind(this);
  }

  handleHunterPosition(e) {
    this.setState({
      hunterX: e.clientX,
      hunterY: e.clientY
    });
  }

  handlePreyPosition(e) {
    this.setState({
      preyX: this.state.hunterX + 50,
      preyY: this.state.hunterY + 50
    });
  }

  render() {
    return (
      <div style={{ height: 1000 }} onMouseMove={this.handleHunterPosition} /*onMouseOver={this.handlePreyPosition}*/ >
        {this.props.render(this.state)}
        <PreyPosition />
      </div>
    );
  }
}

const PreyPosition = (props) => {
  return (
    <div>
      <p> PRESA</p>
    </div>
  );
};
