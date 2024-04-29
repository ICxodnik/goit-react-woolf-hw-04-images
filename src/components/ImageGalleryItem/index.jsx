import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  //   static propTypes = {second: third}

  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.src} alt={this.props.alt} />
      </li>
    );
  }
}
