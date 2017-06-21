import React from 'react';
import Styles from '../styles/Style.css';
import classNames from 'classnames';

export default ({ pageData, linkClick, btnClick }) => {
  return(
    <li className={ Styles.item }>
      <div className={ Styles.itemData }>
        <header className={ Styles.itemHeader }>
          <div 
            className={ 
              classNames(
                Styles.itemHeaderCell,
                Styles.itemHeaderCellImg
              )  
            } >
            <img src={ pageData.favicon } />
          </div>
          <div className={ Styles.itemHeaderCell }>
            <a 
              href={ pageData.url }
              onClick={ linkClick } >
              { pageData.title }
            </a>
          </div>
        </header>
        <div className={ Styles.itemBody }>
          <div className={ Styles.itemDesc }>
            <p>{ pageData.desc }</p>
          </div>
          <div className={ Styles.itemDel }>
            <button 
              onClick={ btnClick }
              className={ Styles.delBtn }
              data-key={ pageData.key } ></button>
          </div>
        </div>
      </div>
    </li>
  )
}