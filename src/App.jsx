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

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.state.page !== prevState.page ||
  //     this.state.query !== prevState.query
  //   ) {
  //     this.search(true);
  //     OR
  //     this.search();
  //   }
  // }

  handleLoadMore = () => {
    this.setState(
      prevState => {
        return {
          isLoading: true,
          page: prevState.page + 1,
          hasNextPage: false,
          apiError: '',
          appError: '',
        };
      },
      //використовую callback setState замість методів життєвого циклу
      () => {
        this.search();
      }
    );
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
      //використовую callback setState замість методів життєвого циклу
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

  //id зберігається в dataset
  //з часом потрібно буде змінювати які дані потрібно відобразити в попапі,
  // пошук по id більш довгострокове та оптимальне рішення ніж зберігати всі дані в dataset
  handleOpenModal = id => {
    const image = this.state.images.find(i => i.id === id);
    this.setState({
      modalImage: image,
    });
  };

  handleCloseModalImage = () => {
    this.setState({
      modalImage: null,
    });
  };

  handleCloseModalError = () => {
    this.setState({
      apiError: '',
      appError: '',
    });
  };

  render() {
    return (
      <div className="app">
        <Loader hide={!this.state.isLoading} />
        {this.state.modalImage && (
          <Modal
            modalImage={this.state.modalImage}
            onOverlayClick={this.handleCloseModalImage}
          />
        )}
        {this.state.appError && (
          <Error
            appError={this.state.appError}
            onOverlayClick={this.handleCloseModalError}
          />
        )}
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
