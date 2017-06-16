import React from 'react';
import classNames from 'classnames';

import Styles from '../styles/Style.css';

export default ({ shopInfo }) => {
  return(
    <li className={ classNames( Styles.shop, `shop--${shopInfo.id}`) }>
      <div className={ classNames('shop__container' )}>
        <h2 className={ Styles.shopName }>{ shopInfo.name }</h2>
        <div className={ Styles.shopInfo }>
          <dl>
            <dt>アクセス:</dt><dd>{ shopInfo.access }</dd>
            <dt>住所:</dt><dd>{ shopInfo.address }</dd>
            <dt>オープン:</dt><dd>{ shopInfo.open }</dd>
            <dt>平均:</dt><dd>{ shopInfo.budget }</dd>
            <dt>URL:</dt><dd><a href={ shopInfo.url } target="_blank">ウェブサイト</a></dd>
          </dl>
        </div>
      </div>
    </li>
  )
}