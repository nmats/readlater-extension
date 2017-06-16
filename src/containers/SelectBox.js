import React, { Component } from 'react';
import SelectOption from '../components/SelectOption';
import classNames from 'classnames';

import Styles from '../styles/Style.css';

export default class SelectBox extends Component {

  render() {
    return(
      <div className={ classNames( Styles.formSelectWrapper, Styles.formItemWrapper ) }>
        <select 
          id={ this.props.id } 
          className={ this.props.id } 
          name={ this.props.name } >
          { this.props.defaultVar }
          {
            [...Object.keys(this.props.options)].map( key => {
              const pref = {
                name: this.props.options[ key ],
                val: key 
              };
              return <SelectOption option={ pref } key={ pref.name } />
            })
          }
        </select>
      </div>
    )
  }
}