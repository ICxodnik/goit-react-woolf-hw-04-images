import PropTypes from 'prop-types';
import React from 'react';

export default function Button(props) {
  if (props.hide) {
    return;
  }
  return (
    <button
      className="button load-more"
      type="button"
      onClick={() => {
        props.handleLoadMore();
      }}
    >
      {props.title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  handleLoadMore: PropTypes.func,
};
