import React from 'react';




import Coinlogo from '../images/coin-logo.png'
import PriceHigh from "../btcprice/PriceHigh"
import PriceLow from "../btcprice/PiceLow"
import CurrentPrice from "../btcprice/CurrentPrice"

export default class Header extends React.Component {
        constructor(){
            super()
            this.state = {
                bidPrice: -1,
                highPrice: -1,
                lowPrice: -1,
                hourPrice:-1,
            }
        }
        componentDidMount(){
            fetch('https://www.btcsms.com/news/api')
            .then(results => {
               return results.json();
            }).then(data =>{
            
              if(!isNaN(data.prices.bid)){
               this.setState({bidPrice: data.prices.bid});
              }
              if(!isNaN(data.prices.high)){
                this.setState({highPrice: data.prices.high});
               }
              if(!isNaN(data.prices.low)){
                this.setState({lowPrice: data.prices.low});
               }
               console.log()
               if(!isNaN(data.prices.changes.price.hour)){
                this.setState({hourPrice: data.prices.changes.price.hour});
               }
               
            })
            }
            
renderPrice(){
    
    if (this.state.hourPrice>0){
        return <span className="layer text-succes">${this.state.bidPrice}</span>
    }else {
        return <span className="layer text-danger">${this.state.bidPrice}</span>
    }
}


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
                    <span className="layer">{this.renderPrice()}</span>
                    </div>

                    <div className="col-md-3 d-none d-sm-block text-right ">
                        <div className="btn-group high-low">
                            <a href="#" className="btn btn-md btn-secondary btn-success  " id="highdiv">${this.state.highPrice}</a>
                            <a href="#" className="btn btn-md  btn-secondary btn-danger " id="lowdiv">${this.state.lowPrice}</a>
                        </div>

                    </div>
                </div>
            </div>

        )
    }

}
