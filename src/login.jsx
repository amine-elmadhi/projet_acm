import React, { Component } from 'react';
import './login.css';
import logoacm from './images/logoacm.png';
import Group1 from './images/Group1.png';
import user from './images/user.png';
import ligne1 from './images/ligne1.png';
import ligne2 from './images/ligne2.png';
import puser from './images/puser.png';
import Eyeoff from './images/Eyeoff.png';
import { Link } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isEmailVerified: false,
      showPassword: false,
    };
  }

  handleEmailVerification = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!this.state.email.match(emailRegex)) {
      alert('Format d\'e-mail invalide. Veuillez entrer une adresse e-mail valide.');
      return;
    }

    this.setState({ isEmailVerified: true });
  };

  handlePasswordVerification = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!this.state.password.match(passwordRegex)) {
      alert('Format de mot de passe invalide. Le mot de passe doit contenir au moins 8 caractères et inclure au moins une lettre et un chiffre.');
      return;
    }
  };

  handleTogglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleGoBackToEmail = () => {
    this.setState({ isEmailVerified: false });
  };

  render() {
    const { email, password, isEmailVerified, showPassword } = this.state;

    return (
      <div id='bodylgn'>
      <div className="login">
        <img className="logo" src={logoacm} alt="ACM Logo" />
        <div className="grid">
          <p className="bienvenue">
            Bienvenue dans la meilleure Société <span className="minispan">ACM</span>
          </p>
          <img className="group" src={Group1} alt="ACM user" />
          <img className="ln1" src={ligne1} alt="ACM user" />
          <img className="ln2" src={ligne2} alt="ACM user" />
          <img src={user} alt="ACM user" />
          <img className="puser" src={puser} alt="puser" />
          <div className="big">
            {isEmailVerified ? (
              <React.Fragment>
                <p className="connect">Entrez votre mot de passe</p>
                <p className="profiter">Pour profiter de toutes nos fonctionnalités géniales</p>
                <p className="Adressemail">Mot de passe</p>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="maillog"
                    value={password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                  <img className="seepass" src={Eyeoff} alt="voir" onClick={this.handleTogglePasswordVisibility} />
                </div>
                <div className="number">
                  <p className="two2" onClick={this.handleGoBackToEmail}>1</p>
                  <p className="one1" onClick={this.handlePasswordVerification}>2</p>
                </div>
                <Link exact to="/admin"> <button className="sub" > <span>Soumettre</span> </button></Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p className="connect">Connectez-vous à votre compte!</p>
                <p className="profiter">Pour profiter de toutes nos fonctionnalités géniales</p>
                <p className="Adressemail">Adresse e-mail</p>
                <input
                  type="email"
                  className="mail"
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <div className="number">
                  <p className="one" style={{ color: '#ECC9F8' }}>1</p>
                  <p className="two" style={{ color: '#603D6C' }} onClick={this.handleEmailVerification}>2</p>
                </div>
                <button className="sub" type="submit" onClick={this.handleEmailVerification}>
                  <span>Soumettre</span>
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;
