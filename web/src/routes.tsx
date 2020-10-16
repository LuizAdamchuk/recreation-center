import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { OrphMap } from './pages/OrphMap';
import { Orphanage } from './pages/Orphanage';
import { CreateOrphanage } from './pages/CreateOrphanage';

export const Routes = () => {
  return (
    <BrowserRouter>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={OrphMap}   />
        <Route path="/orphanages/:id" component={Orphanage} />
        <Route path="/teste" component={CreateOrphanage}  />
        
    </BrowserRouter>
  );
};
