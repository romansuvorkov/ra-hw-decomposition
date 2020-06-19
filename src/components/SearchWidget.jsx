import React from 'react';

/**
 * Компонент для рендеринга поискового поля
 */

function SearchWidget(props) {

  return (
    <div className="search_widget_wrapper">
      <div className="search_links">
        <span>Видео</span>
        <span>Картинки</span>
        <span>Новости</span>
        <span>Карты</span>
        <span>Маркет</span>
        <span>Переводчик</span>
        <span>Эфир</span>
        <span>Еще</span>
      </div>
      <div className="input_field">
        <img className="logo" />
        <input />
        <button />
      </div>
      <span>Найдется всё. Например{props.example}</span>
    </div>
  );

}

export default SearchWidget;