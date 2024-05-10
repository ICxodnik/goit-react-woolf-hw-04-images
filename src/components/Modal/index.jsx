import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export default function Modal(props) {
  const handleEscButton = e => {
    if (e.code !== 'Escape') {
      return;
    }
    props.onOverlayClick();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscButton);

    return () => {
      document.removeEventListener('keydown', handleEscButton);
    };
  }, []);

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
