import React from 'react';

export default ({ action }) => {
  return(
    <button
      onClick={ action }>
      { 'Save' }
    </button>
  )
}