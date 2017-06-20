import React, { Component } from 'react';

// =======================
// Import view components.
// =======================
import Info from '../components/PageInfo';
import SaveBtn from '../components/SaveBtn';

// =======================
// Import modules.
// =======================
import Styles from '../styles/Style.css';

export default class PageInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      description: '',
      favicon: ''
    };
  }

  clickSave() {
    this.props.db.setData({
      title: this.state.title,
      url: this.state.url,
      desc: this.state.description,
      favicon: this.state.favicon
    })
    .then( () => {
      window.close();
    })
    .catch( err => {
      console.error( err );
    });
  }

  componentDidMount() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage( tabs[0].id, { type: 'from-popup' }, res => {
        if ( res.type === 'from-content' ) {
          this.setState(() => ({
            title: res.title,
            url: res.url,
            description: res.description,
            favicon: res.favicon
          }));
        }  
      });
    });
  }

  render() {
    return(
      <section className={ Styles.pageinfoWrapper }>
        <Info title={ this.state.title } />
        <SaveBtn action={ this.clickSave.bind(this) } />
      </section>
    )
  }
}