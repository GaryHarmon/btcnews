import React, {Component} from 'react'

class PriceCurrent extends Component{

constructor(){
    super();
    this.state = {  bidPrice: -1 }
}

componentWillMount(){
    fetch('https://www.btcsms.com/news/api')
    .then(results => {
       return results.json();
    }).then(data =>{
    
      //isNaN checks to make sure price.high is actually a number. We want isNaN to be false becasue we want price.high to be a number. 
      if(!isNaN(data.prices.bid)){
       this.setState({bidPrice: data.prices.bid});
      }
    
    
    
    })
    
    }
    
    //We create the renderHighPrice method so that we can put all of our formatting code and html in one place.  
    //if the price is -1. the api fetch has not completed.
    renderBidPrice(bidPrice){
      
      //if highPrice is a -1. we want to render --   Otherwise we want to render the price.
      if(bidPrice===-1){
        return '--' ;
      }
      return bidPrice;
    
    }
    
    
    render(){
    console.log(this);
    console.log(this.state.bidPrice);
       return(
         <span>
          {this.renderBidPrice(this.state.bidPrice)}
         </span>
       )
    }
    
    
    
    
    }export default PriceCurrent