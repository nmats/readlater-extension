import React, { Component } from 'react';
import querystring from 'querystring';
import http from 'http';

import PaginationButton from '../components/PaginationButton';

import Styles from '../styles/Style.css';

export default class Pagination extends Component {

  render() {
    const currentPage = ( this.props.startNum - 1 ) / 10;
    const remaingPage = Math.ceil( this.props.totalShopNum / 10 ) - currentPage;
    console.log( currentPage, remaingPage );
    return(
      <div className={ Styles.pagination } >
        { 
          currentPage > 0 
          ? <PaginationButton 
              label={ 'Prev' } 
              click={ this.props.btnClick }
              next={ this.props.startNum - 10 } /> 
          : null 
        }
        { 
          remaingPage > 1
          ? <PaginationButton 
              label={ 'Next' } 
              click={ this.props.btnClick }
              next={ this.props.startNum + 10 } /> 
          : null 
        }
      </div>
    )
  }
}