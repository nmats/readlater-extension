import React from 'react';
import Styles from '../styles/Style.css';

export default ({ shopNum }) => {
  return(
    <section >
      { `検索結果: ${shopNum}件` }
    </section>
  )
}