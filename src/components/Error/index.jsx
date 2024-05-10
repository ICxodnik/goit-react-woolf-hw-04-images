import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
export default function Error({ onOverlayClick, message }) {
  useEffect(() => {
    document.addEventListener('keydown', handleEscButton);
    return () => document.removeEventListener('keydown', handleEscButton);

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
        Something went wrong!
        <br />
        {message}
      </div>
    </>
  );
}

Error.propTypes = {
  onOverlayClick: PropTypes.func,
  appError: PropTypes.string,
};
