import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default class ImageGallery extends Component {
  //   static propTypes = { second: third };

  render() {
    console.log(this.props.images);
    return (
      <div className="gallery">
        {/* <ul className="gallery"> */}
        {this.props.images.map(el => {
          return <ImageGalleryItem image={el} key={el.id} />;
        })}
        ;{/* </ul> */}
      </div>
    );
  }
}
