import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Commande from './Commande';
import Admin from './admin';
import Principale from './Principale';
import Datauser from './data/bduser';
import Chg from './data/chg';
import Version from './data/version';
import Contrat from './data/contrat';
import Profiluser from './profiluser';
import Login from './login';

class Routtes extends Component {
  render() {
    return (
      <div>
        <Routes>
        <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Principale />} />
          <Route path="/Datauser" element={<Datauser />} />
          <Route path="/chg" element={<Chg />} />
          <Route path="/version" element={<Version />} />
          <Route path="/contrat" element={<Contrat />} />
          <Route path="/Commande" element={<Commande />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/profiluser" element={<Profiluser />} />

        </Routes>
      </div>
    );
  }
}

export default Routtes;
