import PropTypes from 'prop-types';
import React from 'react';

export default function SearchBar(props) {
  const handleSearch = e => {
    e.preventDefault();
    var formEl = document.forms.searchForm;
    var formData = new FormData(formEl).get('searchQuery');
    props.handleQueryChange(formData);
  };

  // const handleInput = e => {
  //   props.handleQueryChange(e.currentTarget.value);
  // };

  return (
    <header>
      <form className="search-form" onSubmit={handleSearch} id="searchForm">
        <input
          name="searchQuery"
          className="search-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // onChange={handleInput}
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
}
SearchBar.propTypes = { handleQueryChange: PropTypes.func };
