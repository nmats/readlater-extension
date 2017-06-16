import React from 'react';

export default ({ option }) => {
  return(
    <option value={ option.val } >
      { option.name }
    </option>
  )
}