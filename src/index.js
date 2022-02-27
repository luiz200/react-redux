import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/navBar/NavBar';
import Paginat from './components/Pagination/Pagination';
import Search from './components/Search/Search';

ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Search/>
    <App />
    <Paginat/>
  </React.StrictMode>,
  document.getElementById('root')
);
