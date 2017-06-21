export default class Database {

  constructor() {
    this.items = {};
  }

  setData( data ) {
    return new Promise( (resolve, reject) => {
      const newData = {};
      const now = Date.now();
      data = {
        ...data,
        key: now
      };
      newData[ now ] = data;
      chrome.storage.local.set( newData, err => {
        if ( err ) return reject({ message: 'Failed to store data' });
        return resolve({ message: 'Data stored.' });
      });
    });
  }

  removeData( key ) {
    return new Promise( (resolve, reject) => {
      chrome.storage.local.remove( key, err => {
        if ( err ) return reject({ message: 'Failed to remove data' });
        return resolve({ message: 'Data removed' });
      })
    })
  }

  getAllData() {
    return new Promise( (resolve, reject) => {
      chrome.storage.local.get( null, items => {
        if ( !items ) return reject({ message: 'No data' });
        this.items = Object.assign( {}, items );
        return resolve( this.items );
      });
    });
  }

  removeAllData() {
    chrome.storage.local.clear();
  }

}
