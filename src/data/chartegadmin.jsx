import React, { Component } from 'react';
import './chartegadmin.css';
import Navbaradminchertes from '../Navbaradminchertes';
import Footer from '../footer';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';
import { Link } from 'react-router-dom';
import Vector from '../images/Vector.png';

class chartegadmin extends Component {
  state = {
    versions: [],
    editIndex: null,
    editSitewebName: '',
    editLiendecharte: ''
  };

  componentDidMount() {
    // Retrieve versions from local storage
    const versions = localStorage.getItem('versions');
    if (versions) {
      this.setState({ versions: JSON.parse(versions) });
    }
  }

  addVersion = (versionData) => {
    // Handle the addition of new versions
    const { versions } = this.state;
    const newVersions = [...versions, versionData];

    // Update local storage with new versions
    localStorage.setItem('versions', JSON.stringify(newVersions));

    this.setState({ versions: newVersions });
  };

  deleteVersion = (index) => {
    const { versions } = this.state;
    const updatedVersions = [...versions];
    updatedVersions.splice(index, 1);

    // Update local storage with updated versions
    localStorage.setItem('versions', JSON.stringify(updatedVersions));

    this.setState({ versions: updatedVersions });
  };

  updateVersion = (index) => {
    const { versions } = this.state;
    const { editSitewebName, editLiendecharte } = this.state;

    const updatedVersions = [...versions];
    updatedVersions[index] = {
      sitewebName: editSitewebName,
      liendecharte: editLiendecharte
    };

    // Update local storage with updated versions
    localStorage.setItem('versions', JSON.stringify(updatedVersions));

    this.setState({
      versions: updatedVersions,
      editIndex: null,
      editSitewebName: '',
      editLiendecharte: ''
    });
  };

  render() {
    const { versions, editIndex, editSitewebName, editLiendecharte } = this.state;

    return (
      <div>
        <Navbaradminchertes addVersion={this.addVersion} />
        <div className='not'>
          <img className='hind' src={userimg} alt="bd" />
          <p className='usr'>client 444</p>
          <p className='mailuser'>client444@gmail.com</p>
          <img className='notif' src={bell} alt="bd" />
        </div>
        <p className='activitscg'>les activités avec ACM :</p>
        <div className='activit1cg'>
          <Link exact to="/" className='voircg'> Retour</Link>
          <div className='bg'><img className="bd" src={Vector} alt="bd" /></div>
          <p className='text'>chartes graphique</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='activitescg'>
          {versions.map((version, index) => (
            <div className='activit0cgadmin' key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editSitewebName}
                    onChange={(e) => this.setState({ editSitewebName: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editLiendecharte}
                    onChange={(e) => this.setState({ editLiendecharte: e.target.value })}
                  />
                  <button onClick={() => this.updateVersion(index)}>Save</button>
                </>
              ) : (
                <>
                  <p className='text0charte'>{version.sitewebName}</p>
                  <a href={version.liendecharte} className='dis0charte'>{version.liendecharte}</a>
                  <button
                   className="subch"
                    onClick={() => this.setState({
                      editIndex: index,
                      editSitewebName: version.sitewebName,
                      editLiendecharte: version.liendecharte
                    })}
                  >
                    Edit
                  </button>
                  <button className="delch" onClick={() => this.deleteVersion(index)}>Delete</button>
                </>
              )}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default chartegadmin;
