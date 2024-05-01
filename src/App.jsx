import SearchBar from 'components/Searchbar';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Error from 'components/Error';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import { Component } from 'react';
import { getItems } from 'services/api';

export class App extends Component {
  state = {
    page: 1,
    hasNextPage: false,
    query: '',
    images: [],
    isLoading: false,
    modalImage: null,
    apiError: '',
    appError: '',
  };

  componentDidCatch(error) {
    this.setState({ appError: error });
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        isLoading: true,
        page: ++prevState.page,
        hasNextPage: false,
        apiError: '',
        appError: '',
      };
    });
    this.search();
  };

  handleQueryChange = value => {
    this.setState(
      {
        isLoading: true,
        query: value,
        page: 1,
        hasNextPage: false,
        apiError: '',
        appError: '',
      },
      () => {
        this.search(true);
      }
    );
  };

  search = async shouldClear => {
    try {
      const result = await getItems(this.state.query, this.state.page);

      this.setState(prevState => {
        return {
          images: shouldClear
            ? result.data
            : prevState.images.concat(result.data),
          hasNextPage: result.hasNextPage,
          isLoading: false,
        };
      });
    } catch (ex) {
      this.setState({ isLoading: false, apiError: ex });
    }
  };

  updateImages(result, hasNextPage) {
    this.setState({
      images: result,
      hasNextPage: hasNextPage,
      isLoading: false,
    });
  }

  addImages(result, hasNextPage) {
    this.setState(prevState => {
      return {
        images: prevState.images.concat(result),
        hasNextPage: hasNextPage,
        isLoading: false,
      };
    });
  }

  handleOpenModal = id => {
    const image = this.state.images.find(i => i.id === id);
    this.setState({
      modalImage: image,
    });
    document.addEventListener('keydown', this.handleEscButton);
  };

  handleEscButton = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.handleCloseModal();
  };

  handleCloseModal = () => {
    this.setState({
      modalImage: null,
    });
    document.removeEventListener('keydown', this.handleEscButton);
  };

  render() {
    return (
      <div className="app">
        <Loader hide={!this.state.isLoading} />
        <Modal
          modalImage={this.state.modalImage}
          onOverlayClick={this.handleCloseModal}
        />
        <Error
          appError={this.state.appError}
          onOverlayClick={this.handleCloseModal}
        />
        <SearchBar handleQueryChange={this.handleQueryChange} />
        <ImageGallery
          images={this.state.images}
          onSelected={this.handleOpenModal}
          apiError={this.state.apiError}
        />
        <Button
          title="Load more"
          handleLoadMore={this.handleLoadMore}
          hide={!this.state.hasNextPage}
        />
      </div>
    );
  }
}
