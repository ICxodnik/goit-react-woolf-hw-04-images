import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Modal extends Component {
  //   static propTypes = {second: third}

  render() {
    if (!this.props.modalImage) {
      return;
    }
    return (
      <>
        <div className="overlay" onClick={this.props.onOverlayClick}></div>
        <div className="modal">
          <img
            src={this.props.modalImage.largeImageUrl}
            alt={this.props.modalImage.altTags}
          />
        </div>
      </>
    );
  }
}
