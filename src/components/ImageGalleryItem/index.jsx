import PropTypes from 'prop-types';
import React from 'react';

export default function ImageGalleryItem({ image }) {
  return (
    <li className="photo-card" data-id={image.id}>
      <img
        src={image.previewImageUrl}
        alt={image.altTags}
        loading="lazy"
        className="gallery__image"
      />
      <div className="info">
        <p className="info-item">
          <b>Likes</b>
          <span>{image.likeCount}</span>
        </p>
        <p className="info-item">
          <b>Views</b>
          <span>{image.viewCount}</span>
        </p>
        <p className="info-item">
          <b>Comments</b>
          <span>{image.commentsCount}</span>
        </p>
        <p className="info-item">
          <b>Downloads</b>
          <span>{image.downloadCount}</span>
        </p>
      </div>
    </li>
  );
}

ImageGalleryItem.propTypes = { image: PropTypes.object };
