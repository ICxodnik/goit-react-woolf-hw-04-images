import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default class ImageGallery extends Component {
  //   static propTypes = { second: third };

  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
