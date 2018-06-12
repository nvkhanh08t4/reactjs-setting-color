import React, { Component } from 'react';

class Reset extends Component {
  resetAll = () => {
    this.props.onReset(true);
  }
  render() {
    return (
      <button type="button" className="btn btn-info" onClick={this.resetAll}>Reset</button>
    );
  }
}

export default Reset;
