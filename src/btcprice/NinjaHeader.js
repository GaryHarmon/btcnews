import React from 'react';
import PriceHead from '../btcprice/PriceHead'
import Highlow from '../btcprice/Highlow'

import {Col, Row} from 'react-bootstrap'
import Coinlogo from '../images/coin-logo.png'
export default class Header extends React.Component {
    render() {
        return (
            <div className="header-bg">
                <div className="row cnfont">
                    <div className="col-md-3"><img
                        className="logo"
                        src={Coinlogo}
                        style={{
                maxHeight: "75%", paddingLeft: "28px", paddingTop: "11px", paddingBottom: "7px"
                
            }} />
                    </div>
                    <div className="col-md-6 col-xs-12 text-center layer">
                    <span className="layer">$9,366.66</span>
                    </div>

                    <div className="col-md-3 d-none d-sm-block text-right ">
                        <div className="btn-group high-low">
                            <a href="#" className="btn btn-md btn-secondary btn-success  " id="highdiv">9,458.64</a>
                            <a href="#" className="btn btn-md  btn-secondary btn-danger " id="lowdiv">9,124.99</a>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}
