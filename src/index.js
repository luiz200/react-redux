import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/navBar/NavBar';
import Paginat from './components/Pagination/Pagination';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <App />
    <Paginat/>
  </React.StrictMode>,
  document.getElementById('root')
);
