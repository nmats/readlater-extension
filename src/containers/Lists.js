import React, { Component } from 'react';

import ListItem from '../components/ListItem';

export default class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: []
    }
  }

  async getDocuments() {
    await this.props.db.findDocuments().then( docs => {
      this.setState(() => ({
        lists: docs
      }));
    });
  }

  async connectDatabase() {
    return await this.props.db.observeCollection();
  }

  componentWillMount() {
    this.getDocuments();
    this.connectDatabase();
  }

  render() {
    return(
      <section>
        <h2>List</h2>
        <ul>
          {
            this.state.lists.map( list => {
              return <ListItem pageData={ list } key={ list.id } />
            })
          }
        </ul>
      </section>
    )
  }
}