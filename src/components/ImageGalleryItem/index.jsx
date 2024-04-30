import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  //   static propTypes = {second: third}

  render() {
    let img = this.props.image;
    return (
      <li className="photo-card" data-id={img.id}>
        <img
          src={img.previewImageUrl}
          alt={img.altTags}
          loading="lazy"
          className="gallery__image"
        />
        <div className="info">
          <p className="info-item">
            <b>Likes</b>
            <span>{img.likeCount}</span>
          </p>
          <p className="info-item">
            <b>Views</b>
            <span>{img.viewCount}</span>
          </p>
          <p className="info-item">
            <b>Comments</b>
            <span>{img.commentsCount}</span>
          </p>
          <p className="info-item">
            <b>Downloads</b>
            <span>{img.downloadCount}</span>
          </p>
        </div>
      </li>
    );
  }
}
