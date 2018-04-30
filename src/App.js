import React, {Component} from 'react';
import './App.css';
import DashboardPage from '../src/containers/dashboard/Dashboard';
import NinjaHeader from '../src/btcprice/NinjaHeader';
import PriceHead from '../src/btcprice/PriceHead'
import LatestNews from '../src/components/news/LatestNews';
import NavHead from '../src/containers/Nav/NavHead';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="blockchain-bg container-fluid">
  
        
        <Row>
          <Col >
          <NinjaHeader></NinjaHeader>
          
          <LatestNews></LatestNews>
          </Col>
        </Row>
          
        
        </div>
     

    );
  }
}

export default App;
