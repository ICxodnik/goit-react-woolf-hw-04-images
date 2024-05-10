import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export default function Modal({ onOverlayClick, modalImage }) {
  useEffect(() => {
    document.addEventListener('keydown', handleEscButton);

    return () => {
      document.removeEventListener('keydown', handleEscButton);
    };
    function handleEscButton(e) {
      if (e.code !== 'Escape') {
        return;
      }
      onOverlayClick();
    }
  }, [onOverlayClick]);

  return (
    <>
      <div className="overlay" onClick={onOverlayClick}></div>
      <div className="modal">
        <img src={modalImage.largeImageUrl} alt={modalImage.altTags} />
      </div>
    </>
  );
}

Modal.propTypes = {
  modalImage: PropTypes.object,
  onOverlayClick: PropTypes.func,
};
