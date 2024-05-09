import PropTypes from 'prop-types';
import React from 'react';

export default function Error(props) {
  if (!props.appError.length) {
    return;
  }
  return (
    <>
      <div className="overlay" onClick={props.onOverlayClick}></div>
      <div className="modal">
        Something went wrong!
        <br />
        {props.appError}
      </div>
    </>
  );
}

Error.propTypes = {
  onOverlayClick: PropTypes.func,
  appError: PropTypes.string,
};
