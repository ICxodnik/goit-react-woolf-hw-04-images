import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  //   static propTypes = {second: third}

  render() {
    return (
      <li className="photo-card">
        <a className="gallery__link" href={this.props.image.largeImageUrl}>
          <img
            src={this.props.image.previewImageUrl}
            alt={this.props.image.altTags}
            data-source={this.props.image.largeImageUrl}
            loading="lazy"
            className="gallery__image"
          />
        </a>
        <div className="info">
          <p className="info-item">
            <b>Likes</b>
            <span>{this.props.image.likeCount}</span>
          </p>
          <p className="info-item">
            <b>Views</b>
            <span>{this.props.image.viewCount}</span>
          </p>
          <p className="info-item">
            <b>Comments</b>
            <span>{this.props.image.commentsCount}</span>
          </p>
          <p className="info-item">
            <b>Downloads</b>
            <span>{this.props.image.downloadCount}</span>
          </p>
        </div>
      </li>
    );
  }
}
