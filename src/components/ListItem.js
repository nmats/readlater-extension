import React from 'react';

export default ({ pageData }) => {
  return(
    <li>
      <div className={ 'list-data' }>
        <div>
          <a href={ pageData.page_url }>
            { pageData.page_title }
          </a>
        </div>
        <div>
          { pageData.page_desc }
        </div>
      </div>
    </li>
  )
}