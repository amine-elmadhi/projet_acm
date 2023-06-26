import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Commande from './Commande';
import Admin from './admin';
import Principale from './Principale';
import Principaleadmin from './Principaleadmin';
import Datauser from './data/bduser';
import Hébergement from './data/Hébergement';
import Chg from './data/chg';
import Version from './data/version';
import Versionadmin from './data/versionadmin';
import Contrat from './data/contrat';
import Contratadmin from './data/contratadmin';
import Profiluser from './profiluser';
import Login from './login';
import Bduseradmin from './data/bduseradmin';
import Chartegadmin from './data/chartegadmin';
class Routtes extends Component {
  render() {
    return (
      <div>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/Principale" element={<Principale />} />
          <Route path="/Principaleadmin" element={<Principaleadmin />} />
          <Route path="/Datauser" element={<Datauser />} />
          <Route path="/Hébergement" element={<Hébergement />} />
           <Route path="/chg" element={<Chg />} />
          <Route path="/version" element={<Version />} />
          <Route path="/Versionadmin" element={<Versionadmin />} />
          <Route path="/contrat" element={<Contrat />} />
          <Route path="/Contratadmin" element={<Contratadmin />} />
          <Route path="/chartegadmin" element={<Chartegadmin />} />
          <Route path="/Commande" element={<Commande />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/bduseradmin" element={<Bduseradmin />} />
          <Route path="/profiluser" element={<Profiluser />} />

        </Routes>
      </div>
    );
  }
}

export default Routtes;
