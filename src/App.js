import React, { Component } from 'react';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './components/Table/Table';
import store from './components/store/store';
import Search from './components/Search/Search';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Search/>
        <Tab/>
      </Provider>
    );
  }
}

export default App;
