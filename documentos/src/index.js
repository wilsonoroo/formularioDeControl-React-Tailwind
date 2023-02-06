import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './components/cierraGorda/Header';
import { KinRossLayout } from './components/kinRoss/KinRossLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <KinRossLayout />
  // </React.StrictMode>
);

