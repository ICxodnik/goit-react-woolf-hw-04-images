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
    page: 0,
    hasNextPage: false,
    query: '',
    images: [],
    isLoading: false,
    modalImage: null,
    apiError: '',
    appError: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.handleSearch();
    }
  }

  componentDidCatch(error) {
    this.setState({ appError: error });
  }

  updateImages(result, hasNextPage) {
    this.setState({
      images: result,
      hasNextPage: hasNextPage,
      isLoading: false,
    });
  }

  handleSearch = async () => {
    this.setState({ isLoading: true });
    try {
      const result = await getItems(this.state.query, ++this.state.page);
      this.updateImages(result.data, result.hasNextPage);
    } catch (ex) {
      this.setState({ isLoading: false, apiError: ex });
    }
  };

  addImages(result, hasNextPage) {
    this.setState(prevState => {
      return {
        images: prevState.images.concat(result),
        hasNextPage: hasNextPage,
        isLoading: false,
      };
    });
  }

  handleLoadMore = async () => {
    this.setState({ isLoading: true });
    try {
      const result = await getItems(this.state.query, ++this.state.page);
      this.addImages(result.data, result.hasNextPage);
    } catch (ex) {
      this.setState({ isLoading: false, apiError: ex });
    }
  };

  handleQueryChange = value => {
    this.setState({
      query: value,
      page: 0,
      hasNextPage: false,
      apiError: '',
      appError: '',
    });
  };

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
        <SearchBar
          // handleSearch={this.handleSearch}
          handleQueryChange={this.handleQueryChange}
        />
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
