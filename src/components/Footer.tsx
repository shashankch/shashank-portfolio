import { margin } from '@mui/system';
import { useEffect, useState } from 'react';

function Footer() {
  return (
    <div className='footer'>
      <div>
        <strong>Created with </strong>
        <img
          style={{ margin: 0, position: 'relative', top: 7 }}
          src='/static/images/heart.png'
          alt='heart'
        ></img>
        <strong> by Shashank</strong>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a
          href='https://shashankch.github.io/shashankch/'
          style={{ color: 'white' }}
        >
          Visit old site here...
        </a>
      </div>
    </div>
  );
}

export default Footer;
