import React from 'react';
import TableListItem from '../table-list-item/table-list-item';
import './table.css';

const Table = ({ items }) => {
  const head = (
    <thead>
      <tr>
        <th key={1}>Imie</th>
        <th key={2}>Nazwisko</th>
        <th key={3}>Dzial</th>
        <th key={4}>Wyn.Kwota</th>
        <th key={5}>Wyn.Waluta</th>
      </tr>
    </thead>
  )
  const elements = items.map((item) => {
    const { id, imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta } = item;
    return (
      <tr key={id}>
        <td key={1}><TableListItem
          imie={imie} /></td>
        <td key={2}><TableListItem
          nazwisko={nazwisko} /></td>
        <td key={3}><TableListItem
          dzial={dzial} /></td>
        <td key={4}><TableListItem
          wynagrodzenieKwota={wynagrodzenieKwota} /></td>
        <td key={5}><TableListItem
          wynagrodzenieWaluta={wynagrodzenieWaluta} /></td>
      </tr>
    );
  });

  return (<div className="table-responsive">
    <table className="table table-bordered">
      {head}
      <tbody>
        {elements}
      </tbody>
    </table>
  </div>);
};

export default Table;
