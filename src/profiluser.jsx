import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './profiluser.css';
import Profileimage from './images/Profileimage.png';

class profiluser extends Component {
  state = {
    projetsFait: 0,
    projetsTravaille: 0,
    projetsAVenir: 0
  };

  componentDidMount() {
    this.startNumberIncrement();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startNumberIncrement = () => {
 
    const targetValues = {
      projetsFait: 234,
      projetsTravaille: 526,
      projetsAVenir: 456
    };
    const incrementDuration = 1; // Duration of increment animation in milliseconds

    this.intervalId = setInterval(() => {
      let isIncrementing = false;
      const updatedState = {};

      for (const key in targetValues) {
        if (this.state[key] < targetValues[key]) {
          updatedState[key] = this.state[key] + 1;
          isIncrementing = true;
        } else {
          updatedState[key] = targetValues[key];
        }
      }

      if (isIncrementing) {
        this.setState(updatedState);
      } else {
        clearInterval(this.intervalId);
      }
    }, incrementDuration);
  };

  render() {
    const { projetsFait, projetsTravaille, projetsAVenir } = this.state;

    return (
      <div>
        <Navbar />
        <img className='Profileimage' src={Profileimage} alt="bd" />
        <div className='numbers'>
          <p className='num1'>+{projetsFait}</p>
          <p className='mot1'>PROJET FAIT</p>
          <p className='num2'>+{projetsTravaille}</p>
          <p className='mot2'>PROJET ON COEUR DE TRAVAILLE</p>
          <p className='num3'>+{projetsAVenir}</p>
          <p className='mot3'>PROJET A VENIR</p>
        </div>
        <div>
          <div className='data'>
            <p className='datan'>Nom client :</p>
            <p className='datau'>Mohamed amin elmadhi</p>
            <p className='datan'>Nom entreprise :</p>
            <p className='datau'>Salle de sport sousse </p>
            <p className='datan'>num tel :</p>
            <p className='datau'>+216 28 605 474 </p>
            <p className='datan'>mail :</p>
            <p className='datau'>mohamedmadhi106@gmail.com</p>
          </div>
          <div className='data1'>
            <p className='datan'>domaine d'activité :</p>
            <p className='datau'> sport </p>
            <p className='datan'>date de contrat :</p>
            <p className='datau'>salle de sport sousse </p>
            <p className='datan'>adresse</p>
            <p className='datau'>enfidha sousse</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default profiluser;
