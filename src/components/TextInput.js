import React from 'react';
import classNames from 'classnames';

import Styles from '../styles/Style.css';

export default ({ forClass, label }) => {
  return(
    <div className={ classNames(Styles.formItemWrapper) }>
      <input 
        id={ forClass } 
        type="text" 
        name={ forClass }
        placeholder={ label } />
    </div>
  )
}