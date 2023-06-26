import React, { Component } from 'react';
import Navbaradmin from './navbaradmin';
import Footer from './footer';
import bd from './images/bd.png';
import version from './images/version.png';
import Logo from './images/Logo.png';
import Vector from './images/Vector.png';
import userimg from './images/userimg.png';
import bell from './images/bell.png';
import { Link } from 'react-router-dom';
import './principale.css';
class Principaleadmin extends Component {
  render() {
    return (
      <div className='bodypr'>
        <Navbaradmin />

        <div className='not'>
        <Link exact to="/profiluser"><img className='hind' src={userimg} alt="bd" /></Link>
          <p className='usr'>client 444</p>
          <p className='mailuser'>client444@gmail.com</p>
          <Link exact to="/Commande"> <img className='notif' src={bell} alt="bd" /></Link>
        </div>

        <p className='activitspr'>les activités avec ACM :</p>
        <div className='activit1pr'>
        <Link exact to="/bduseradmin" className='voirpr'> Voir tout</Link>
          <div className='bg'><img className="bd" src={bd} alt="bd" /></div>
          <p className='text'> Hébergement</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activit2pr'>
          <Link exact to="/contratadmin" className='voirpr'> Voir tout</Link>
          <div className='bg'><img className="bd" src={Logo} alt="bd" /></div>
          <p className='text'>Contrat</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activit3pr'>
          <Link exact to="/chartegadmin" className='voirpr'> Voir tout</Link>
          <div className='bg'><img className="bd" src={Vector} alt="bd" /></div>
          <p className='text'>Chartes graphique</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activit4pr'>
          <Link exact to="/Versionadmin" className='voirpr'> Voir tout</Link>
          <div className='bg'><img className="bd" src={version} alt="bd" /></div>
          <p className='text'>Version sites</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Principaleadmin;
