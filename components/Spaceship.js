import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>Name: {this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets?: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
