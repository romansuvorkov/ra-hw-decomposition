import React from 'react';

/**
 * Универсальный компонент для рендеринга компонентов списка
 */

function ListItem(props) {

  return (
    <div className="list_item">
      {props.children}
      {props.time && <span className="time">{props.time}</span>}
      {props.icon && <img url={props.icon}/>}
      <a href={props.link}><span className="Header">{props.header} - </span></a>
      <a href={props.headerLink}><span className="text">{props.text}</span></a>
      {props.icon && <a href={props.sourceLink}><span className="source">{props.source}</span></a>}
    </div>
  );

}

export default ListItem;

ColumnItem.propTypes = PropTypes.shape({
      /**
       * Ссылка на изображение для иконки
       */
        icon: PropTypes.string,
        /**
       * Ссылка на страницу контента
       */
        link: PropTypes.string.isRequired,
        /**
       * Текст заголовка
       */        
        text: PropTypes.string.isRequired,
        /**
       * Время для телепередач
       */        
        time: PropTypes.string,
        /**
       * Источник
       */    
        source: PropTypes.string,
        /**
       * Ссылка на источник
       */    
        sourceLink: PropTypes.string,
        /**
        * Заголовок
        */    
       header: PropTypes.string,
       /**
        * Ссылка на источник
        */    
       headerLink: PropTypes.string
})
