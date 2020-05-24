import React, { Component } from 'react';
import './search-salary.css';

export default class SearchSalary extends Component {

  state = {
    from: '',
    to: ''
  };

  onTermChangeFrom = (e) => {
    const { onTermChangeFrom = () => { } } = this.props;
    this.setState({
      from: e.target.value
    });
    onTermChangeFrom(e.target.value);
  };
  onTermChangeTo = (e) => {
    const { onTermChangeTo = () => { } } = this.props;
    this.setState({
      to: e.target.value
    });
    onTermChangeTo(e.target.value);
  };

  render() {
    return (<div className="d-flex"><input
      type="number"
      className="form-control search-input"
      placeholder="od"
      value={
        this.state.from
      }
      onChange={
        this.onTermChangeFrom
      }
    /><input
        type="number"
        className="form-control search-input"
        placeholder="do"
        value={
          this.state.to
        }
        onChange={
          this.onTermChangeTo
        }
      /></div>
    );
  };
}