import PropTypes from 'prop-types';
import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default function ImageGallery(props) {
  const onClick = e => {
    const id = e.target.closest('.photo-card').dataset['id'];
    props.onSelected(id);
  };

  if (props.apiError) {
    return (
      <div className="gallery empty-gallery">
        <p className="gallery-exceptional-info">Sorry, something went wrong!</p>
        <br />
        <p className="gallery-info">{props.apiError}</p>
      </div>
    );
  }
  if (!props.images.length) {
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
    <ul className="gallery" onClick={onClick}>
      {props.images.map(el => {
        return <ImageGalleryItem image={el} key={el.id} />;
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onSelected: PropTypes.func,
};
