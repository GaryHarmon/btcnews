import React, {Component} from 'react'

class PriceCurrent extends Component{

constructor(){
    super();
    this.state = {  bidPrice: -1,}
}

componentDidMount(){
    fetch('https://www.btcsms.com/news/api')
    .then(results => {
       return results.json();
    }).then(data =>{
    
      if(!isNaN(data.prices.bid)){
       this.setState({bidPrice: data.prices.bid});
      }
    })
    }
    renderBidPrice(bidPrice){
      
      
      if(bidPrice===-1){
        return '--' ;
      }
      return bidPrice;
    
    }
    render(){
       return(
         <span>
          {this.renderBidPrice(this.state.bidPrice)}
         </span>
       )
    }
    
    
    
    
    }export default PriceCurrent