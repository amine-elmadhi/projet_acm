import React, { Component } from 'react';
import './footer.css';
import logoblue from './images/logoblue.png';
import tel from './images/tel.png';
import TikTok from './images/TikTok.png';
import Instagram from './images/Instagram.png';
import Facebook from './images/Facebook.png';
import twt from './images/twt.png';
import LinkedIn from './images/LinkedIn.png';

class footer extends Component {
  render() {
    return (
      <div className='footer'> 
        <img className="logoblue" src={logoblue} alt="bd" />
        
        <div className='photos'>
          <img src={TikTok} alt="bd" />
          <img src={Instagram} alt="bd" />
          <img src={Facebook} alt="bd" />
          <img src={twt} alt="twt" />
          <img src={LinkedIn} alt="LinkedIn" />
        </div>

        <p className='rtext'>Réseaux sociaux</p>
        <p className='mails1'> contact@acm-marketing.com</p>
        <p className='mails2'>acm.marketing.tn@gmail.com </p>
        <img className="tel" src={tel} alt="bd" />
        <p className='tele'>+216 73 367 402</p>
        <p className='coppy'>© 2023 Tous droits réservés.</p>
      </div>
    );
  }
}

export default footer;
