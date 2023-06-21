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
        <Link exact to="/" className='voirbd'> Retour</Link>
          <div className='bg'><img className="bd" src={bd} alt="bd" /></div>
          <p className='text'>base de données</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activitepss'>
          <div className='activit0ps'>
            <p className='text0'>projet 1  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>

          <div className='activit2ps'>
            <p className='text0'>projet 2  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
          <div className='activit3ps'>
            <p className='text0'>projet 3  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
          <div className='activit4ps'>
            <p className='text0'>projet 4  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
          <div className='activit5ps'>
            <p className='text0'>projet 5  </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
          <div className='activit6ps'>
            <p className='text0'>projet 6   </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
          <div className='activit7ps'>
            <p className='text0'>projet 7   </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
          <div className='activit8ps'>
            <p className='text0'>projet 8   </p>
            <p className='dis0'>  30/09/2020</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Datauser;
