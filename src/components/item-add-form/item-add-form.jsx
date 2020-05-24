import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    imie: '',
    nazwisko: '',
    dzial: '',
    wynagrodzenieKwota: '',
    wynagrodzenieWaluta: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta } = this.state;
    if (imie && nazwisko && dzial && wynagrodzenieKwota && wynagrodzenieWaluta) {
      this.setState({ imie: '', nazwisko: '', dzial: '', wynagrodzenieKwota: '', wynagrodzenieWaluta: '' });
      this.props.onItemAdded(imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta);
    } else {
      alert('Proszę wypełnić wszystkie pola');
    }
  };

  onImieChange = (e) => {
    this.setState({
      imie: e.target.value
    })
  };
  onNazwiskoChange = (e) => {
    this.setState({
      nazwisko: e.target.value
    })
  };
  onDzialChange = (e) => {
    this.setState({
      dzial: e.target.value
    })
  };
  onWynagrodzenieKwotaChange = (e) => {
    this.setState({
      wynagrodzenieKwota: e.target.value
    })
  };
  onWynagrodzenieWalutaChange = (e) => {
    this.setState({
      wynagrodzenieWaluta: e.target.value.toUpperCase()
    })
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control new-table"
          value={this.state.imie}
          onChange={this.onImieChange}
          placeholder="Imie" />
        <input type="text"
          className="form-control new-table"
          value={this.state.nazwisko}
          onChange={this.onNazwiskoChange}
          placeholder="Nazwisko" />
        <input type="text"
          className="form-control new-table"
          value={this.state.dzial}
          onChange={this.onDzialChange}
          placeholder="Dział" />
        <input type="number"
          className="form-control new-table"
          value={this.state.wynagrodzenieKwota}
          onChange={this.onWynagrodzenieKwotaChange}
          placeholder="Wynagrodzenie" />
        <input type="text"
          className="form-control new-table"
          value={this.state.wynagrodzenieWaluta}
          onChange={this.onWynagrodzenieWalutaChange}
          placeholder="Waluta" />
        <button type="submit"
          className="btn btn-outline-secondary">Dodać</button>
      </form>
    );
  }
}
