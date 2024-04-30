import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  static propTypes = {
    title: PropTypes.string,
    handleLoadMore: PropTypes.func,
  };

  render() {
    if (this.props.hide) {
      return;
    }
    return (
      <button
        className="button load-more"
        type="button"
        onClick={() => {
          this.props.handleLoadMore();
        }}
      >
        {this.props.title}
      </button>
    );
  }
}
