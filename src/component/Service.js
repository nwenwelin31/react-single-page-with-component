import React from 'react';
import './service.css';
import plantAbout from './blander.png';

export default function Service() {
  return (
    // Service Section
    <div id='service' className='service'>
      <div className='cardService'>
        <img src={plantAbout}></img>
      </div>
      <div className='textService'>
        <h4><b>Full Plants Care Services</b></h4>
        <small>Plants clean air and filter water, bacteria decompose wastes, bees</small>
        <p><b><a><u>Learn more</u></a></b></p>
      </div>
    </div>
  )
}
