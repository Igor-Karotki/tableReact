import React from 'react';
import './table-list-item.css';

const TableListItem = ({ imie, nazwisko, dzial, wynagrodzenieKwota, wynagrodzenieWaluta }) => {

  return (
    <div className="table-list-item">
      {imie}{nazwisko}{dzial}{wynagrodzenieKwota}{wynagrodzenieWaluta}
    </div>
  );
};

export default TableListItem;
