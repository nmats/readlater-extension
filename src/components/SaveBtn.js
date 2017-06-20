import React from 'react';
import Styles from '../styles/Style.css';

export default ({ action }) => {
  return(
    <div className={ Styles.saveBtnWrapper }>
      <button
        onClick={ action }
        className={ Styles.saveBtn }>
        { 'Add to list' }
      </button>
    </div>
  )
}