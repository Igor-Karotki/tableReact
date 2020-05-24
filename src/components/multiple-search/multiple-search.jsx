import React, { Component } from 'react';
import './multiple-search.css';

export default class MultipleSearch extends Component {

  state = {
    value: ['']
  };

  onChange = (e) => {
    const { onMultiplefilterChange = () => { } } = this.props;
    let newVal = e.target.value
    let stateVal = this.state.value

    stateVal.indexOf(newVal) === -1 ? stateVal.push(newVal) : stateVal.length === true ? (stateVal = []) : stateVal.splice(stateVal.indexOf(newVal), true)

    this.setState({ value: stateVal });
    onMultiplefilterChange(stateVal);
  };

  render() {
    const { multiplef } = this.props;
    const elements = multiplef.map((dzial, index) => {
      return (
        <option key={index} value={dzial}>{dzial}</option>
      );
    });
    return (
      <select className='form-control margin' size="4" multiple={true}
        value={this.state.value} onChange={this.onChange}>
         <option disabled></option>
        {elements}
      </select>
    );
  };
}
