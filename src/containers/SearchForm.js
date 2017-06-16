import React, { Component } from 'react';
import classNames from 'classnames';

// =================
// Import components
// =================
import SelectBox from './SelectBox';
import TextInput from '../components/TextInput';

// ================
// Import constants
// ================
import { PREFS, SHOPTYPE, BUDGET } from '../constants';

import Styles from '../styles/Style.css';

export default class SearchForm extends Component {

  render() {
    return(
      <form 
        onSubmit={ this.props.onsubmit }
        className={ classNames(Styles.form) } >
        <SelectBox
          id={ 'prefName' }
          name={ 'pref' }
          defaultVar={ <option value="99">都道府県</option> }
          options={ PREFS } />
        <TextInput forClass="address" label="住所" />
        <TextInput forClass="access" label="最寄り駅" />
        <TextInput forClass="name" label="店名" />
        <SelectBox
          label={ 'タイプ' }
          id={ 'shopType' }
          name={ 'type' }
          defaultVar={ null }
          options={ SHOPTYPE } />
        <SelectBox
          id={ 'budget' }
          name={ 'budget' }
          defaultVar={ <option value="99">予算</option> }
          options={ BUDGET } />
        <TextInput forClass="capacity" label="客席数" />
        <button 
          name="submit" 
          type="submit"
          className={ Styles.formItemSubmit } >検索</button>
      </form>
    )
  }
}