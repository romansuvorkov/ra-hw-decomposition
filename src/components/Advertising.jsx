import React from 'react';

/**
 * Компонент для рендеринга рекламного блока
 */

function Advertising(props) {

  return (
    <div className="advertising_wrapper">
      <span>{props.img}</span>
      <span>{props.header}</span>
      <span>{props.text}</span>
    </div>
  );

}

export default Advertising;