import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { AppRouter } from './router/AppRouter';
import { Header } from './components/sierraGorda/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Header />
  </BrowserRouter>,
  // </React.StrictMode>
);

