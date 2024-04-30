import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = { images: PropTypes.array };

  render() {
    return (
      <ul className="gallery">
        {this.props.images.map(el => {
          return <ImageGalleryItem image={el} key={el.id} />;
        })}
      </ul>
    );
  }
}
