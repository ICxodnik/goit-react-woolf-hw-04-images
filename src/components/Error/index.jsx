import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Error extends Component {
  static propTypes = {
    onOverlayClick: PropTypes.func,
    appError: PropTypes.string,
  };

  render() {
    if (!this.props.appError.length) {
      return;
    }
    return (
      <>
        <div className="overlay" onClick={this.props.onOverlayClick}></div>
        <div className="modal">
          Something went wrong!
          <br />
          {this.props.appError}
        </div>
      </>
    );
  }
}
