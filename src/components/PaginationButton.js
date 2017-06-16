import React from 'react';

import Styles from '../styles/Style.css';

export default ({ label, click, next }) => {
  return(
    <div className={ Styles.paginationButtonWrapper }>
      <button 
        className={ Styles.paginationButton }
        onClick={ click }
        data-next={ next } >{ label }</button>
    </div>
  )
}