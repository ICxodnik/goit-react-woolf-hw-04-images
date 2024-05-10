import SearchBar from 'components/Searchbar';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Error from 'components/Error';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import { getItems } from 'services/api';
import { useState, useEffect } from 'react';

export function App() {
  const initialPage = 1;
  const [page, setPage] = useState(initialPage);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [apiError, setApiError] = useState('');
  const [appError, setAppError] = useState('');

  const handleLoadMore = () => {
    setPage(page + 1);

    setIsLoading(true);
    setHasNextPage(false);
    setApiError('');
    setAppError('');
  };

  const handleQueryChange = value => {
    setPage(initialPage);
    setQuery(value);

    setIsLoading(true);
    setHasNextPage(false);
    setApiError('');
    setAppError('');
  };

  useEffect(() => {
    search();

    async function search() {
      try {
        const result = await getItems(query, page);

        setImages(images => {
          if (page === initialPage) {
            return result.data;
          }
          return images.concat(result.data);
        });
        setHasNextPage(result.hasNextPage);
        setIsLoading(false);
      } catch (ex) {
        setIsLoading(false);
        setApiError(ex);
      }
    }
  }, [query, page]);

  const handleOpenModal = id => {
    const image = images.find(i => i.id === id);
    setModalImage(image);
  };

  const handleCloseModalImage = () => {
    setModalImage(null);
  };

  const handleCloseModalError = () => {
    setApiError('');
    setAppError('');
  };

  return (
    <div className="app">
      <Loader hide={!isLoading} />
      {modalImage && (
        <Modal modalImage={modalImage} onOverlayClick={handleCloseModalImage} />
      )}
      {(appError || apiError) && (
        <Error
          message={appError || apiError}
          onOverlayClick={handleCloseModalError}
        />
      )}
      <SearchBar handleQueryChange={handleQueryChange} />
      <ImageGallery
        images={images}
        onSelected={handleOpenModal}
        apiError={apiError}
      />
      <Button
        title="Load more"
        handleLoadMore={handleLoadMore}
        hide={!hasNextPage}
      />
    </div>
  );
}
