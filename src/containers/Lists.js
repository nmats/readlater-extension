import React, { Component } from 'react';

// =======================
// Import view components.
// =======================
import ListItem from '../components/ListItem';

// =======================
// Import modules.
// =======================
import Styles from '../styles/Style.css';

export default class Lists extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      lists: []
    }
  }

  getDocuments() {
    this.props.db.getAllData()
    .then( items => {
      this.setState( () => ({
        lists: Object.values( items )
      }));
    })
    .catch( err => console.error( err ) );
  }

  removeAllData() {
    this.props.db.removeAllData()
    .then( () => null )
    .catch( err => console.error( err.message ) );
  }

  linkClick( event ) {
    event.preventDefault();

    const link = event.currentTarget.href;
    chrome.tabs.create({
      url: link,
      active: true
    });
  }

  buttonClick( event ) {
    event.preventDefault();

    const key = event.currentTarget.getAttribute( 'data-key' );
    this.props.db.removeData( key )
    .then( () => {
      this.setState( prev => ({
        lists: prev.lists.filter( list => list.key != key )
      }));
    }) 
    .catch( err => console.error( err.message ) );
  }

  componentDidMount() {
    this.getDocuments();
  }

  render() {
    return(
      <section>
        <h2>List</h2>
        <ul className={ Styles.items }>
          {
            this.state.lists.map( list => {
              return <ListItem 
                pageData={ list } 
                key={ list.key } 
                linkClick={ this.linkClick.bind( this ) }
                btnClick={ this.buttonClick.bind( this ) } />
            })
          }
        </ul>
      </section>
    )
  }
}