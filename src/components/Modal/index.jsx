import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Modal extends Component {
  //   static propTypes = {second: third}

  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
