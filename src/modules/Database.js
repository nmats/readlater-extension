import React from 'react';
import * as RxDB from 'rxdb';

import {
DB_NAME,
DB_PWD,
COLLECTION_NAME,
COLLECTION_SCHEMA } from '../constants';

RxDB.plugin( require('pouchdb-adapter-idb') );

export default class Database {

  constructor() {
    this.db = null;
    this.collection = null;
  }

  async init() {

    console.log( '[RxDB] Creating Database...' );
    this.db = await RxDB.create({
      name: DB_NAME,
      password: DB_PWD,
      adapter: 'idb',
      multiInstance: true
    });
    console.log( '[RxDB] Database created.' );

    console.log( '[RxDB] Creating collection...' );
    this.collection = await this.db.collection({
      name: COLLECTION_NAME,
      schema: COLLECTION_SCHEMA
    });
    console.log( '[RxDB] Collection created...' );

    return true;
  }

  async findDocuments() {
    const bookmarks = await this.collection.find().exec();
    return bookmarks;
  }

  async addDocument( title, url, desc ) {
    console.log( 'Insert page data...' );
    return await this.collection.insert({
      id: String( Date.now() ),
      page_title: title,
      page_url: url,
      page_desc: desc
    })
    .then( doc => {
      console.log( `Inserted ${JSON.stringify(doc)}` );
      return doc;
    }); 
  }

  async observeCollection() {
    return await this.collection.$.subscribe();
  }

}