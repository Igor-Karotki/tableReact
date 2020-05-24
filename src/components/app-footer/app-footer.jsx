import React from 'react';
import './app-footer.css';

const AppFooter = ({ items }) => {
  let sum = {};
  items.map((item) => {
    sum[item.dzial] = +item.wynagrodzenieKwota + ((sum[item.dzial] === undefined) ? 0 : sum[item.dzial]);
  }); 
  const dzials = Object.keys(sum).map((dzial) => {
    return (
      <li className="list-group-item" key={dzial}>{dzial + ': ' + sum[dzial].toFixed(2)}</li>
    )
  })

  const result = items.reduce((a, b) => +a + +b.wynagrodzenieKwota, 0);

  return (
    <div className="app-footer d-flex flex-row-reverse">
      <ul className="list-group">
        {dzials}
      </ul>
      <h2>Suma całkowita: {result.toFixed(2)}</h2>
    </div>
  );
}

export default AppFooter;