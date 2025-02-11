import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { AppRouter } from './router/AppRouter';
import { Header } from './components/sierraGorda/Header'
import { ZaldivarCheckList } from './components/zaldivar/ZaldivarCheckList';
import { ZaldivarCheckListCC } from './components/zaldivar/ZaldivarCheckListCC';
import { ProactiveLayout } from './components/proactive/ProactiveLayout'
import { KinRossLayout } from './components/kinRoss/KinRossLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ZaldivarCheckList /> */}
      <ZaldivarCheckListCC />
      {/* <Header/> */}
      {/* <KinRossLayout/>  */}
      {/* <ProactiveLayout/> */}
    </BrowserRouter>,
  </React.StrictMode>
);

