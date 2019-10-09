import React, { Component } from 'react';
import Navigationbar from './component/navbar/Navigationbar';
import Dashboard from './component/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigationbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;