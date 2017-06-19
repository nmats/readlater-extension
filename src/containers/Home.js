import React, { Component } from 'react';
import classNames from 'classnames';

import PageInformation from './PageInformation';
import Lists from './Lists';

import DB from '../modules/Database';
import Style from '../styles/Style.css';
import '../assets/css/reset.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shops: null,
      searchObj: {},
      database: null
    }
  }

  componentDidMount() {
    const db = new DB();
    db.init().then( () => {
      this.setState(() => ({
        database: db
      }));
    });
  }

  render() {
    return(
      <section 
          className={ classNames(Style.searchForm) }>
          {
            !!this.state.database
            ? <PageInformation db={ this.state.database } />
            : null
          }
          {
            !!this.state.database
            ? <Lists db={ this.state.database } />
            : null
          }
      </section>
    )
  }

}