import React from 'react';
import PriceHead from '../btcprice/PriceHead'
import Highlow from '../btcprice/Highlow'

import {Col,Row} from 'react-bootstrap'
export default class Header extends React.Component {
    render() {
        return (
            
            <div col-6>
                <img  src="https://www.btcsms.com/assets/img/coin-logo.png"/>
                <PriceHead ></PriceHead><Highlow ></Highlow>
                
                
            </div>
            
        )
    }
}
