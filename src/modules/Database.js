import React from 'react';
import * as RxDB from 'rxdb';

import {
DB_NAME,
DB_PWD,
COLLECTION_NAME,
COLLECTION_SCHEMA } from '../constants';

RxDB.plugin( require('pouchdb-adapter-websql') );

const RxDB = {};

const createDB = async () => {
  const db = await RxDB.create({
    name: DB_NAME,
    password: DB_PWD,
    adapter: 'websql',
    multiInstance: true
  });

  return db;
}

const createCollection = async db => {
  const collection = await db.collection({
    name: COLLECTION_NAME,
    schema: COLLECTION_SCHEMA
  });

  return collection;
}

RxDB.init = () => {
  return createDB();
}

RxDB.collection = () => {
  return createCollection();
}