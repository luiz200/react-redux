import React, { Component } from 'react';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './components/Table/Table';
import store from './components/store/store';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Tab/>
      </Provider>
    );
  }
}

export default App;
