import React, { Component } from 'react';
import classNames from 'classnames';

import Pagination from './Pagination';

import Shop from '../components/Shop';
import SearchItem from '../components/SearchItem';

import { sendRequest } from '../modules/helper';

import Styles from '../styles/Style.css';

export default class ShopResults extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shopList: [],
      latestSearch: this.props.searchObj,
      startNum: Number( this.props.list.results_start ),
      totalShopNum: Number( this.props.list.results_available )
    }
  }

  changeShopList( event ) {
    const nextStart = Number( event.currentTarget.getAttribute('data-next') );
    const nextSearch = {
      ...this.state.latestSearch,
      start: nextStart
    };

    sendRequest( nextSearch, ( shops, searchObj ) => {
      const shopList = [...shops.shop].map( shop => {
        return this.generateShop( shop );
      });

      this.setState( () => ({
        shopList: shopList,
        latestSearch: searchObj,
        startNum: nextStart
      }));
    });
  }

  setShopToState( shops ) {
    const shopList = [...shops].map( shop => {
      return this.generateShop( shop );
    });

    this.setState( () => ({
      shopList: shopList
    }));
  }

  generateShop( shop ) {
    const shopInfo = {
      name: shop.name,
      address: shop.address,
      access: shop.access,
      budget: shop.budget,
      tel: shop.id,
      open: shop.open,
      url: shop.url_pc,
      photo: shop.url_photo_s1
    };

    return <Shop shopInfo={ shopInfo } key={ shop.id } />;
  }


  componentDidMount() {
    const shops = this.props.list.shop;
    this.setShopToState( shops );
  }

  componentWillReceiveProps( nextProps ) {
    const shops = nextProps.list.shop;
    this.setShopToState( shops );
    
    this.setState( () => ({
      latestSearch: nextProps.searchObj,
      startNum: Number( nextProps.list.results_start ),
      totalShopNum: Number( nextProps.list.results_available )
    }));
  }

  render() {
    return(
      <section className={ Styles.resultSection }>
        <SearchItem shopNum={ this.state.totalShopNum } />
        <ul className={ Styles.reusltLists }>
          { this.state.shopList }
        </ul>
        {
          this.state.totalShopNum > 10
          ? <Pagination 
              btnClick={ this.changeShopList.bind(this) }
              startNum={ this.state.startNum }
              totalShopNum={ this.state.totalShopNum } />
          : null
        }
      </section>
    )
  }
}