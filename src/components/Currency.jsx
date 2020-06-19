import React from 'react';

/**
 * Компонент для рендеринга курсов валюты
 */

function Currency(props) {

  return (
    <div className="currency_wrapper">
      <span>{props.usd}</span>
      <span>{props.eur}</span>
      <span>{props.oil}</span>
    </div>
  );

}

export default Currency;