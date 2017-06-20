import React from 'react';
import Styles from '../styles/Style.css';

export default ({ title }) => {
  return(
    <div>
      <div className={ Styles.pageinfoBody }>
        <h3 
          className={ Styles.pageinfo_label }>{ 'Current Page Title' }</h3>
        <div className={ Styles.pageinfoName}>
          <pre>{ title }</pre>
        </div>
      </div>
    </div>
  );
}