import querystring from 'querystring';
import http from 'http';

import { API_URL, API_OPTIONS } from '../constants';

export const sendRequest = ( apiData, callback ) => {

  const searchObj = Object.assign(
    {},
    apiData,
    API_OPTIONS
  );

  const requestUrl = `${API_URL}${querystring.stringify(searchObj)}`;
  const request = http.request( requestUrl, res => {  
    let chunkString = '';

    res.on( 'data', chunk => {
      chunkString += chunk.toString();
    });

    res.on( 'end', () => {
      callback( JSON.parse( chunkString ).shops, searchObj );
    });
    
  });

  request.on( 'error', err => {
    console.log( `Failed to connect API: ${err}` );
  });

  request.on( 'end', () => {

  });

  request.end();
}