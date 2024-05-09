import PropTypes from 'prop-types';
import React from 'react';

export default function Modal(props) {
  if (!props.modalImage) {
    return;
  }
  return (
    <>
      <div className="overlay" onClick={props.onOverlayClick}></div>
      <div className="modal">
        <img
          src={props.modalImage.largeImageUrl}
          alt={props.modalImage.altTags}
        />
      </div>
    </>
  );
}

Modal.propTypes = {
  modalImage: PropTypes.object,
  onOverlayClick: PropTypes.func,
};
