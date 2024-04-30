import SearchBar from 'components/Searchbar';
import Loader from 'components/Loader';
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
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.handleSearch();
    }
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
    const result = await getItems(this.state.query, this.state.page);
    this.updateImages(result.data, result.hasNextPage);
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
    const result = await getItems(this.state.query, ++this.state.page);
    this.addImages(result.data, result.hasNextPage);
  };

  handleQueryChange = value => {
    this.setState({
      query: value,
    });
  };

  render() {
    return (
      <div className="app">
        <Loader hide={!this.state.isLoading} />
        <SearchBar
          // handleSearch={this.handleSearch}
          handleQueryChange={this.handleQueryChange}
        />
        <ImageGallery images={this.state.images} />
        <Button
          title="Load more"
          handleLoadMore={this.handleLoadMore}
          hide={!this.state.hasNextPage}
        />
      </div>
    );
  }
}
