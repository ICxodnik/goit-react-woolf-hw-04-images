import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
export default function Error(props) {
  const handleEscButton = e => {
    if (e.code !== 'Escape') {
      return;
    }
    props.onOverlayClick();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscButton);
    return () => document.removeEventListener('keydown', handleEscButton);
  }, []);

  return (
    <>
      <div className="overlay" onClick={props.onOverlayClick}></div>
      <div className="modal">
        Something went wrong!
        <br />
        {props.message}
      </div>
    </>
  );
}

Error.propTypes = {
  onOverlayClick: PropTypes.func,
  appError: PropTypes.string,
};
