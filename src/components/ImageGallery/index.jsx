import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = { images: PropTypes.array, onSelected: PropTypes.func };

  onClick = e => {
    const id = e.target.closest('.photo-card').dataset['id'];
    this.props.onSelected(id);
  };

  render() {
    if (!this.props.images.length) {
      return (
        <div className="gallery empty-gallery">
          <p className="gallery-info">
            Sorry, there are no images matching your search query. Please try
            again
          </p>
        </div>
      );
    }
    return (
      <ul className="gallery" onClick={this.onClick}>
        {this.props.images.map(el => {
          return <ImageGalleryItem image={el} key={el.id} />;
        })}
      </ul>
    );
  }
}
