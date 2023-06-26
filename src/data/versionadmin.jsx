import React, { Component } from 'react';
import './version.css';
import Navbaradminversion from '../Navbaradminversion';
import Footer from '../footer';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';
import { Link } from 'react-router-dom';
import Version from '../images/version.png';

class VersionAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      versions: []
    };
  }

  componentDidMount() {
    // Retrieve version data from localStorage
    const storedVersions = localStorage.getItem('versions');
    if (storedVersions) {
      this.setState({ versions: JSON.parse(storedVersions) });
    }
  }

  componentDidUpdate() {
    // Store version data in localStorage
    const { versions } = this.state;
    localStorage.setItem('versions', JSON.stringify(versions));
  }

  addVersion = (version) => {
    const newVersion = {
      id: Date.now(),
      projectName: version.sitewebName,
      newVersion: version.newVersion,
      oldVersion: version.oldVersion,
      date: new Date().toLocaleDateString()
    };

    this.setState((prevState) => ({
      versions: [...prevState.versions, newVersion]
    }));
  };

  handleViewAncienneVersion = (oldVersion) => {
    if (oldVersion) {
      window.open(oldVersion, '_blank');
    } else {
      console.error('Old version link is not defined.');
    }
  };

  handleViewNouvelleVersion = (newVersion) => {
    if (newVersion) {
      window.open(newVersion, '_blank');
    } else {
      console.error('New version link is not defined.');
    }
  };

  handleDeleteVersion = (id) => {
    this.setState((prevState) => ({
      versions: prevState.versions.filter((version) => version.id !== id)
    }));
  };

  renderVersions() {
    return this.state.versions.map((version) => (
      <div className='activit0vrs' key={version.id}>
        <p className='text0'>{version.projectName}</p>
        <p className='disvers'  >{version.date}</p>
        <button  className="delete"  onClick={() => this.handleViewAncienneVersion(version.oldVersion)}>
            Ancienne  
        </button>
        <button  className="delete" onClick={() => this.handleViewNouvelleVersion(version.newVersion)}>
            Nouvelle  
        </button>
        <button className="modif" onClick={() => this.handleDeleteVersion(version.id)}>Delete</button>
      </div>
    )); 
  }

  render() {
    return (
      <div>
        <Navbaradminversion addVersion={this.addVersion} />
        <div className='not'>
          <img className='hind' src={userimg} alt='bd' />
          <p className='usr'>client 444</p>
          <p className='mailuser'>client444@gmail.com</p>
          <img className='notif' src={bell} alt='bd' />
        </div>
        <p className='activitsvrs'>les activités avec ACM :</p>
        <div className='activit1vrs'>
          <Link exact to='/Principale' className='voirvrs'>
            Retour
          </Link>
          <div className='bg'>
            <img className='bd' src={Version} alt='bd' />
          </div>
          <p className='text'>version sites</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activitesvrs'>{this.renderVersions()}</div>
        <Footer />
      </div>
    );
  }
}

export default VersionAdmin;
