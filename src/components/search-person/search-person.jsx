import React, { Component } from 'react';
import './search-person.css';

export default class SearchPerson extends Component {

  onTermChange = (e) => {
    const { onSearchChange = () => { } } = this.props;
    onSearchChange(e.target.value);
  };

  render() {
    return (
      <div className="d-flex">
        <input
          type="search"
          className="form-control search-input"
          placeholder="osoba"
          onChange={
            this.onTermChange
          }
        />
      </div>
    );
  };
}