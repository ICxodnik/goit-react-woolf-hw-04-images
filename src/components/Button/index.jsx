import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  //   static propTypes = { second: third };

  getClasses() {
    let btnClass = 'button load-more';
    if (this.props.hide) btnClass += ' hidden';
    return btnClass;
  }

  render() {
    return (
      <button
        className={this.getClasses()}
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
