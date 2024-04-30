import SearchBar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { Component } from 'react';
import { getItems } from 'services/api';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.handleSearch();
    }
  }
  updateImages(result) {
    this.setState({
      images: result,
    });
  }

  handleSearch = async () => {
    const result = await getItems(this.state.query, this.state.page);
    this.updateImages(result.data);
  };

  handleQueryChange = value => {
    this.setState({
      query: value,
    });
  };

  render() {
    return (
      <div className="app">
        <SearchBar
          // handleSearch={this.handleSearch}
          handleQueryChange={this.handleQueryChange}
        />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
