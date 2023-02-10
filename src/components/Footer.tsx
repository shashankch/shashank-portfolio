import { margin } from '@mui/system';
import { useEffect, useState } from 'react';

function Footer() {
  return (
    <div className='footer'>
      <div>
        <strong>Created with</strong>
        <img
          style={{ margin: 0, position: 'relative', top: 6 }}
          src='src/assets/heart.png'
          alt='heart'
        ></img>
        <strong>by Shashank</strong>
      </div>

      <div style={{ textAlign: 'center' }}>2023-24</div>
      <div style={{ textAlign: 'center' }}>
        Like plain old project links style?
      </div>
      <div style={{ textAlign: 'center' }}>
        <a
          href='https://shashankch.github.io/shashankch/'
          style={{ color: 'blue' }}
        >
          Go To Old Site
        </a>
      </div>
    </div>
  );
}

export default Footer;
