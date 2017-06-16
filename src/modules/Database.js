import React from 'react';
import * as RxDB from 'rxdb';

import {
DB_NAME,
DB_PWD,
COLLECTION_NAME,
COLLECTION_SCHEMA } from '../constants';

RxDB.plugin( require('pouchdb-adapter-idb') );

const DB = {};

let db = null;
let collection = null;

const createDB = async () => {
  const _db = await RxDB.create({
    name: DB_NAME,
    password: DB_PWD,
    adapter: 'idb',
    multiInstance: true
  });

  const collection = createCollection( _db );

  return _db;
}

const createCollection = async db => {
  const collection = await db.collection({
    name: COLLECTION_NAME,
    schema: COLLECTION_SCHEMA
  });

  return collection;
}

DB.init = () => {
  if ( !!db )
    db = createDB();
  return db;
}

export default DB;