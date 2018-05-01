import React from 'react';




import Coinlogo from '../images/coin-logo.png'
import PriceHigh from "../btcprice/PriceHigh"
import PriceLow from "../btcprice/PiceLow"
import CurrentPrice from "../btcprice/CurrentPrice"

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-bg">
                <div className="row cnfont">
                    <div className="col-md-3"><img
                        className="logo"
                        src={Coinlogo}
                        style={{
                maxHeight: "75%", paddingLeft: "28px", paddingTop: "20px", paddingBottom: "7px"
                
            }} />
                    </div>
                    <div className="col-md-6 col-xs-12 text-center layer">
                    <span className="layer">$<CurrentPrice></CurrentPrice></span>
                    </div>

                    <div className="col-md-3 d-none d-sm-block text-right ">
                        <div className="btn-group high-low">
                            <a href="#" className="btn btn-md btn-secondary btn-success  " id="highdiv">$<PriceHigh></PriceHigh></a>
                            <a href="#" className="btn btn-md  btn-secondary btn-danger " id="lowdiv">$<PriceLow></PriceLow></a>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}
