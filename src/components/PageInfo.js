import React from 'react';
import Styles from '../styles/Style.css';

export default ({ title, label }) => {
  return(
    <div>
      <div className={ Styles.pageinfoBody }>
        <h3 
          className={ Styles.pageinfo_label }>{ label }</h3>
        <div className={ Styles.pageinfoName}>
          <pre>{ title }</pre>
        </div>
      </div>
    </div>
  );
}