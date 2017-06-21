import React from 'react';
import Styles from '../styles/Style.css';

export default ({ action, btnLabel }) => {
  return(
    <div className={ Styles.saveBtnWrapper }>
      <button
        onClick={ action }
        className={ Styles.saveBtn }>
        { btnLabel }
      </button>
    </div>
  )
}