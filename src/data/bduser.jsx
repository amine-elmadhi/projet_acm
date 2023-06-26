import React, { Component } from 'react';
import './bduser.css';
import Navbar from '../navbar';
import Footer from '../footer';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';
import bd from '../images/bd.png';
import { Link } from 'react-router-dom';

class Datauser extends Component {
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
        <p className='activitsps'>les activités avec ACM :</p>
        <div className='activit1ps'>
        <Link exact to="/Principale" className='voirbd'> Retour</Link>
          <div className='bg'><img className="bd" src={bd} alt="bd" /></div>
          <p className='text'>Hébergement</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activitepss'>
          <div className='activit0ps'>
            <p className='nomproj'>projet 1  </p>
                    <Link exact to="/Hébergement" className='accée'> Voir accée</Link>
          </div>
           <div className='activit2ps'>
            <p className='nomproj'>projet 2  </p>
                    <Link exact to="/Hébergement" className='accée'> Voir accée</Link>
          </div>
         </div>
        <Footer />
      </div>
    );
  }
}

export default Datauser;
