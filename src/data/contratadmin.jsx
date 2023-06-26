import React, { Component } from 'react';
import './contratadmin.css';

import Footer from '../footer';
import userimg from '../images/userimg.png';
import bell from '../images/bell.png';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';
import Navbaradmincontrat from '../Navbaradmincontrat';

class contratadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: []
    };
  }

  componentDidMount() {
    const storedContracts = localStorage.getItem('contracts');
    if (storedContracts) {
      this.setState({ contracts: JSON.parse(storedContracts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contracts !== this.state.contracts) {
      localStorage.setItem('contracts', JSON.stringify(this.state.contracts));
    }
  }

  addContract = (newContract) => {
    const { projectName, selectedFile } = newContract;

    // Create a new contract object with file information
    const contract = {
      projectName: projectName,
      date: new Date().toLocaleDateString(),
      selectedFile: selectedFile
    };

    this.setState((prevState) => ({
      contracts: [...prevState.contracts, contract]
    }));
  };
  handleViewFile = (index) => {
    const contract = this.state.contracts[index];
    // Perform the necessary action to view the file
    window.open(contract.fileURL, '_blank');
  };
  

  handleDeleteContract = (index) => {
    const updatedContracts = [...this.state.contracts];
    updatedContracts.splice(index, 1);

    this.setState({
      contracts: updatedContracts
    });
  };

  renderContracts() {
    return this.state.contracts.map((contract, index) => (
      <div className='activit0cn' key={index}>
        <p className='text0'>{contract.projectName}</p>
        <p className='disvers'>{contract.date}</p>
        <button className="delete" onClick={() => this.handleViewFile(index)}>View File</button>
        <button  className="modif" onClick={() => this.handleDeleteContract(index)}>Delete</button>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Navbaradmincontrat addContract={this.addContract} />
        <div className='not'>
          <img className='hind' src={userimg} alt="bd" />
          <p className='usr'>client 444</p>
          <p className='mailuser'>client444@gmail.com</p>
          <img className='notif' src={bell} alt="bd" />
        </div>
        <p className='activitscn'>les activités avec ACM :</p>
        <div className='activit1cn'>
          <Link exact to="/Principale" className='voircn'> Retour</Link>
          <div className='bg'><img className="bd" src={Logo} alt="bd" /></div>
          <p className='text'>contrat</p>
          <p className='dis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='activitescn'>
          {this.renderContracts()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default contratadmin;
