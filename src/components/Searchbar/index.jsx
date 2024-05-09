import PropTypes from 'prop-types';
import React from 'react';

export default function SearchBar(props) {
  // const handleSearch = e => {
  //   e.preventDefault();
  //   props.handleSearch();
  // };

  const handleInput = e => {
    props.handleQueryChange(e.currentTarget.value);
  };

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
          onChange={handleInput}
        />
        {/* <button type="submit" className="button" onClick={handleSearch}>
            <span className="button-label">Search</span>
          </button> */}
      </form>
    </header>
  );
}
SearchBar.propTypes = { handleQueryChange: PropTypes.func };
