import React, { Component } from 'react';
import backgroundImage from '../../background.jpg';
export default class HunterPosition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hunterX: 0,
      hunterY: 0,
      preyX: 0,
      preyY: 0
    };

    this.handleHunterPosition = this.handleHunterPosition.bind(this);
    this.handlePreyPosition = this.handlePreyPosition.bind(this);
  }

  componentDidMount() {
    this.setState({
      preyX: Math.floor((Math.random() * 1000) + 1),
      preyY: Math.floor((Math.random() * 1000) + 1)
    });
  }

  handleHunterPosition(e) {
    this.setState({
      hunterX: e.clientX,
      hunterY: e.clientY
    });
  }

  handlePreyPosition() {
    this.setState({
      preyX: Math.floor((Math.random() * 1000) + 1),
      preyY: Math.floor((Math.random() * 1000) + 1)
    });
  }

  render() {
    return (
      <div style={{ height: 1000, backgroundImage: `url(../../background.jpg)` }} onMouseMove={this.handleHunterPosition} >
        {this.props.render(this.state, this.handlePreyPosition)}
        <div style={{ position: 'absolute', right: 0}}>
        <h1>Pegue o rato!</h1>
          HunterX:<strong>{this.state.hunterX}</strong>
          HunterY:<strong>{this.state.hunterY}</strong>
          preyX:<strong>{this.state.preyX}</strong>
          preyY:<strong>{this.state.preyY}</strong>
        </div>
      </div>
    );
  }
}
