import React, { Component } from 'react';
import './version.css';
import Navbar from '../navbar';
import Footer from '../footer';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';
import { Link } from 'react-router-dom';
import Version from '../images/version.png';
class version extends Component {
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
        <p className='activitsvrs'>les activités avec ACM :</p>
        <div className='activit1vrs'>
        <Link exact to="/Principale" className='voirvrs'> Retour</Link>
        <div className='bg'><img className="bd" src={Version} alt="bd" /></div>
          <p className='text'>version sites</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activitesvrs'>
          <div className='activit0vrs'>
            <p className='text0'>version site 1  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>

          <div className='activit2vrs'>
            <p className='text0'>version site 2  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
 
        </div>
        <Footer />
      </div>
    );
  }
}

export default version;
