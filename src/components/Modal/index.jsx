import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Modal extends Component {
  handleEscButton = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onOverlayClick();
  };

  componentDidMount() {
    console.log('mount');
    document.addEventListener('keydown', this.handleEscButton);
  }

  componentWillUnmount() {
    console.log('unmount');
    document.removeEventListener('keydown', this.handleEscButton);
  }

  render() {
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

Modal.propTypes = {
  modalImage: PropTypes.object,
  onOverlayClick: PropTypes.func,
};
