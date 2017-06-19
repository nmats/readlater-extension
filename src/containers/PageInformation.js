import React, { Component } from 'react';

import Info from '../components/PageInfo';
import SaveBtn from '../components/SaveBtn';

import Styles from '../styles/Style.css';

export default class PageInformation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      description: ''
    };
  }

  async clickSave() {
    const result = await this.props.db.addDocument(
      this.state.title,
      this.state.url,
      this.state.description
    );
  }

  componentDidMount() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.sendMessage( tabs[0].id, { type: 'from-popup' }, res => {
        console.log( res );
        if ( res.type === 'from-content' ) {
          this.setState(() => ({
            title: res.title,
            url: res.url,
            description: res.description
          }));
        }  
      });
    });

    /*this.setState( () => ({
      title: document.querySelector('title').textContent.trim(),
      url: document.location.href
    }));*/
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