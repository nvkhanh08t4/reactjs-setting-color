import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
  }

  onSetColor = (prams) => {
    this.setState({
      color: prams
    })
  }

  onSizeSetting = (value) => {
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
  }

  onReset = (value) => {
    if (value) {
      this.setState({
        color: 'red',
        fontSize: 12
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-50">
          <ColorPicker color={this.state.color} onRecivedColor={this.onSetColor} />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onSizeSetting={this.onSizeSetting} />
            <Reset onReset={this.onReset} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
      </div>
    );
  }
}

export default App;
