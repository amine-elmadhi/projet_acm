import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import bd from './images/bd.png';
import version from './images/version.png';
import Logo from './images/Logo.png';
import Vector from './images/Vector.png';
import userimg from './images/userimg.png';
import bell from './images/bell.png';
import { Link } from 'react-router-dom';
import './principale.css';
class Principale extends Component {
  render() {
    return (
      <div className='bodypr'>
        <Navbar />

        <div className='not'>
          <img className='hind' src={userimg} alt="bd" />
          <p className='usr'>client 444</p>
          <p className='mailuser'>client444@gmail.com</p>
          <img className='notif' src={bell} alt="bd" />
        </div>

        <p className='activitspr'>les activités avec ACM :</p>
        <div className='activit1pr'>
        <Link exact to="/bduseradmin" className='voirpr'> Voir tout</Link>
          <div className='bg'><img className="bd" src={bd} alt="bd" /></div>
          <p className='text'> Hébergement</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activit2pr'>
          <Link exact to="/contrat" className='voirpr'> Voir tout</Link>
          <div className='bg'><img className="bd" src={Logo} alt="bd" /></div>
          <p className='text'>Contrat</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activit3pr'>
          <Link exact to="/chg" className='voirpr'> Voir tout</Link>
          <div className='bg'><img className="bd" src={Vector} alt="bd" /></div>
          <p className='text'>Chartes graphique</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activit4pr'>
          <Link exact to="/version" className='voirpr'> Voir tout</Link>
          <div className='bg'><img className="bd" src={version} alt="bd" /></div>
          <p className='text'>Version sites</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Principale;
