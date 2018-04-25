import React from 'react';
import PriceHead from '../btcprice/PriceHead'
import Highlow from '../btcprice/Highlow'

import {Col, Row} from 'react-bootstrap'
import Coinlogo from '../images/coin-logo.png'
export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="row cnfont">
                    <div className="col-md-3  text-center"><img
                        className=""
                        src={Coinlogo}
                        style={{
                maxHeight: "50px"
            }} />
                    </div>
                    <div className="col-md-6 col-xs-12 text-center">
                        <button
                            className="btn btn-lg btn-secondary"
                            style={{
                            fontSize: "x-large"
                        }}
                            id='pricediv'>
                            8120.09
                        </button>
                    </div>

                    <div className="col d-none d-sm-block text-right ">
                        <div className="btn-group ">
                            <a href="#" className="btn btn-sm  btn-secondary btn-danger " id="lowdiv">Low</a>
                            <a href="#" className="btn btn-sm btn-secondary btn-success " id="highdiv">High</a>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}
