import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import DashboardPage from '../src/containers/dashboard/Dashboard';
import NinjaHeader from '../src/btcprice/NinjaHeader';
import PriceHead from '../src/btcprice/PriceHead'


class App extends Component {
  render() {
    return (
      <div>
        
        <header className="App-header">
        <NinjaHeader> </NinjaHeader>
        </header>

        <div >
       <DashboardPage >
         
       </DashboardPage>
       
       </div>
      
      </div>
    );
  }
}

export default App;
