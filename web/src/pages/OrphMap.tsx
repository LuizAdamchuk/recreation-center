import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarker from '../assets/Local.svg';

import {happyMapIcon} from '../utils/mapIcon'

import '../styles/pages/orph-map.css';
import { api } from '../services/api';

interface Orphanage{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export const OrphMap = () => {
  const [orphanages, setOrphanages]=useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(res => {
      setOrphanages(res.data)
    })
  },[])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="map-pin" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>
        <footer>
          <strong>Londrina</strong>
          <span>Paraná</span>
        </footer>
      </aside>
      <Map
        center={[-23.3045386, -51.1689972]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {orphanages.map(orphanage => {
          return (

                <Marker key={orphanage.id} icon={happyMapIcon} position={[orphanage.latitude, orphanage.longitude]} >
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup' >
                    {orphanage.name}
                      <Link to={`/orphanages/${orphanage.id}`}>
                      <FiArrowRight size={20} color='#fff' />
                      </Link>
                  </Popup>
                </Marker>
        )})}

      </Map>
      <Link to="teste" className="create-orphanate">
        <FiPlus size={36} color="#fff" />
      </Link>
    </div>
  );
};
