import React, {Component} from 'react';
import './App.css';
import DashboardPage from '../src/containers/dashboard/Dashboard';
import NinjaHeader from '../src/btcprice/NinjaHeader';
import PriceHead from '../src/btcprice/PriceHead'
import LatestNews from '../src/components/news/LatestNews'
class App extends Component {
  render() {
    return (
      <div className="blockchain-bg">
        <div className="container-fluid">

          <NinjaHeader></NinjaHeader>
          <LatestNews></LatestNews>

        </div>
      </div>

    );
  }
}

export default App;
