import React, { Component } from 'react';
import './contrat.css';
import Navbar from '../navbar';
import Footer from '../footer';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
class contrat extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='not'>
          <img className='hind' src={userimg} alt="bd" />
          <p className='usr'>client 444</p>
          <p className='mailuser'>client444@gmail.com</p>
          <img className='notif' src={bell} alt="bd" />
        </div>
        <p className='activitscn'>les activités avec ACM :</p>
        <div className='activit1cn'>
        <Link exact to="/" className='voircn'> Retour</Link>
        <div className='bg'><img className="bd" src={Logo} alt="bd" /></div>
          <p className='text'>contrat</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activitescn'>
          <div className='activit0cn'>
            <p className='text0'>contrat 1  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>

          
        </div>
        <Footer />
      </div>
    );
  }
}

export default contrat;
