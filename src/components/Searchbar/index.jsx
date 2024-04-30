import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SearchBar extends Component {
  static propTypes = { handleQueryChange: PropTypes.func };

  handleSearch = e => {
    e.preventDefault();
    this.props.handleSearch();
  };

  handleInput = e => {
    this.props.handleQueryChange(e.currentTarget.value);
  };

  render() {
    return (
      <header>
        <form className="search-form">
          <input
            name="searchQuery"
            className="search-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
          {/* <button type="submit" className="button" onClick={this.handleSearch}>
            <span className="button-label">Search</span>
          </button> */}
        </form>
      </header>
    );
  }
}
