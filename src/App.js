import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-50">
          <ColorPicker />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting />
            <Reset />
          </div>
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
