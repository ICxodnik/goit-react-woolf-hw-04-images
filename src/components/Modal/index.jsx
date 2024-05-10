import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export default function Modal({ onModalClosing, modalImage }) {
  useEffect(() => {
    document.addEventListener('keydown', handleEscButton);

    return () => {
      document.removeEventListener('keydown', handleEscButton);
    };
    function handleEscButton(e) {
      if (e.code !== 'Escape') {
        return;
      }
      onModalClosing();
    }
  }, [onModalClosing]);

  return (
    <>
      <div className="overlay" onClick={onModalClosing}></div>
      <div className="modal">
        <img src={modalImage.largeImageUrl} alt={modalImage.altTags} />
      </div>
    </>
  );
}

Modal.propTypes = {
  modalImage: PropTypes.object,
  onModalClosing: PropTypes.func,
};
