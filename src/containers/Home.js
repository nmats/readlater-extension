import React, { Component } from 'react';
import classNames from 'classnames';

import SearchForm from './SearchForm';
import ShopResults from './ShopResults';

import { sendRequest } from '../modules/helper';

import Style from '../styles/Style.css';
import '../assets/css/reset.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shops: null,
      searchObj: {}
    }
  }

  onsubmit( event ) {
    event.preventDefault();

    const formData = {};
    const elements = event.target.querySelectorAll('input, select');
    [...elements].forEach( elem => {
      const name = elem.getAttribute('name');
      const value = !!elem.value ? elem.value : null;

      if ( !!value && name !== 'submit' && value !== '99' ) {
        formData[ name ] = value;
      }

    });

    sendRequest( formData, ( shops, searchObj ) => {
      this.setState( prev => ({
        shops: shops,
        searchObj: searchObj
      }));
    });
  }

  render() {
    return(
      <section 
        className={ classNames(Style.searchForm) }>
        <SearchForm onsubmit={ this.onsubmit.bind(this) } />
        {
          !!this.state.shops 
          ? <ShopResults 
              list={ this.state.shops }
              searchObj={ this.state.searchObj } /> 
          : null
        }
      </section>
    )
  }
}