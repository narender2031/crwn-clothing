import * as React from 'react';
import { withRouter } from 'react-router-dom'

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {

  return (
    <div className={`menu-item ${size ? size : ''}`} onClick={() => {console.log('clicked')}}>
      <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
    }}/>
      <div className='content'>
        <h1 className="title">
          {title.toUpperCase()}
        </h1>
        <span className='subtitle'>
          SHOP NOW
        </span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);