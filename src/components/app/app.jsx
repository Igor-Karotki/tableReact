import React, { Component } from 'react';

import AppHeader from '../app-header/app-header.jsx';
import Table from '../table/table.jsx';
import SearchPerson from '../search-person/search-person.jsx';
import SearchSalary from '../search-salary/search-salary.jsx';
import ItemAddForm from '../item-add-form/item-add-form.jsx';
import MultipleSearch from '../multiple-search/multiple-search.jsx';
import AppFooter from '../app-footer/app-footer.jsx';
import './app.css';

export default class App extends Component {

  maxId = 999;
  dzials = [];

  state = {
    items: [],
    personSearch: '',
    from: '',
    to: '',
    multiplefilter: ['']
  };
  componentDidMount() {

    fetch('/workers.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        data.map((item) => {
          this.addDzial(item.dzial);
        });
        this.setState({ items: data });
      })
  }
  addDzial = (dzial) => {
    this.dzials = [...this.dzials, dzial];
    this.dzials = [...new Set(this.dzials)];
  };
  onItemAdded = (imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta) => {
    this.addDzial(dzial);
    this.setState((state) => {
      const item = this.createItem(imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta);
      return { items: [...state.items, item] };
    })
  };
  createItem(imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta) {
    return {
      id: ++this.maxId,
      imie,
      nazwisko,
      dzial,
      wynagrodzenieKwota,
      wynagrodzenieWaluta
    };
  };
  onMultiplefilterChange = (multiplefilter) => {
    this.setState({ multiplefilter });
  };
  onSearchChange = (personSearch) => {
    this.setState({ personSearch });
  };
  onTermChangeFrom = (from) => {
    this.setState({ from });
  };
  onTermChangeTo = (to) => {
    this.setState({ to });
  };

  searchItems(items, personSearch, from, to, multiplefilter) {
    if (personSearch.length) {
      items = items.filter((item) => {
        return (item.imie + item.nazwisko).toLowerCase().indexOf(personSearch.toLowerCase()) > -1;
      }
      );
    };
    if (from || to) {
      if (!from) from = 0;
      if (!to) to = 9999999999999;
      items = items.filter((item) => {
        return (+item.wynagrodzenieKwota >= from && +item.wynagrodzenieKwota <= to);
      });
    };
    if (multiplefilter.length > 1) {
      items = items.filter((item) => {
        let dzials = [...multiplefilter, item.dzial];
        dzials = [...new Set(dzials)];
        return dzials.length === multiplefilter.length;
      });
    }
    return items;
  }
  render() {
    const { items, personSearch, from, to, multiplefilter } = this.state;
    const visibleItems = this.searchItems(items, personSearch, from, to, multiplefilter);
    const multiplef = [...this.dzials];

    return (
      <div className="marg">
        <AppHeader items={items} />

        <div className="search-panel block d-flex justify-content-end">
          <MultipleSearch multiplef={multiplef} onMultiplefilterChange={this.onMultiplefilterChange} />
          <SearchPerson
            onSearchChange={this.onSearchChange} />
          <SearchSalary
            onTermChangeFrom={this.onTermChangeFrom} onTermChangeTo={this.onTermChangeTo} />
        </div>

        <Table items={visibleItems} />
        <ItemAddForm onItemAdded={this.onItemAdded} />
        <AppFooter items={visibleItems} />
      </div>
    );
  };
}
