import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  //   static propTypes = { second: third };

  render() {
    let btnClass = 'button load-more';
    if (this.props.hide) btnClass += ' hidden';
    return (
      <button
        className={btnClass}
        type="button"
        onClick="this.props.handleLoadMore"
      >
        {this.props.title}
      </button>
    );
  }
}
