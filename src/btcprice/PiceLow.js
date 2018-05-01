import React, {Component} from 'react'

class PriceLow extends Component{

constructor(){
    super();
    this.state = {  lowPrice: -1 }
}

componentWillMount(){
    fetch('https://www.btcsms.com/news/api')
    .then(results => {
       return results.json();
    }).then(data =>{
    
      //isNaN checks to make sure price.high is actually a number. We want isNaN to be false becasue we want price.high to be a number. 
      if(!isNaN(data.prices.low)){
       this.setState({lowPrice: data.prices.low});
      }
    
    
    
    })
    
    }
    
    //We create the renderHighPrice method so that we can put all of our formatting code and html in one place.  
    //if the price is -1. the api fetch has not completed.
    renderLowPrice(lowPrice){
      
      //if highPrice is a -1. we want to render --   Otherwise we want to render the price.
      if(lowPrice===-1){
        return '--' ;
      }
      return lowPrice;
    
    }
    
    
    render(){
    console.log(this);
    console.log(this.state.lowPrice);
       return(
         <span>
          {this.renderLowPrice(this.state.lowPrice)}
         </span>
       )
    }
    
    
    
    
    }export default PriceLow