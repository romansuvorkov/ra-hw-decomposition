import React from 'react';

/**
 * Универсальный компонент для рендеринга блока сcылок 
 */

function ColumnItem(props) {

  return (
    <>
    <div className="header_wrapper">
      <h2>{props.title}</h2>
      {props.children}
    </div>
    <div className="link_list">
      {props.news.map(o => <ListItem step={o} onRemove={() => handleRemove(o.id)} key={o.id} />)}
    </div>
    </>
  );

}

export default ColumnItem;

ColumnItem.propTypes = {
    /**
 * Название секции
 */
  title: PropTypes.string.isRequired,
    /**
 * Массив объектов для редеринга
 */
  news: PropTypes.arrayOf(
        /**
 * Объект для редеринга
 */
    PropTypes.shape({
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
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.node,
    ),
    PropTypes.string,
    PropTypes.node,
  ])
};
