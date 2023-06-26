import React, { Component } from 'react';
import './chg.css';
import Navbar from '../navbar';
import Footer from '../footer';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';
import { Link } from 'react-router-dom';
import Vector from '../images/Vector.png';
class chg extends Component {
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
        <p className='activitscg'>les activités avec ACM :</p>
        <div className='activit1cg'>
        <Link exact to="/Principale" className='voircg'> Retour</Link>
        <div className='bg'><img className="bd" src={Vector} alt="bd" /></div>
          <p className='text'>chartes graphique</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activitescg'>
          <div className='activit0cg'>
            <p className='text0'>chartes graphique 1  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>

          <div className='activit2cg'>
            <p className='text0'>chartes graphique 2  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
   
        </div>
        <Footer />
      </div>
    );
  }
}

export default chg;
