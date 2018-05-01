import React, {Component} from 'react'

class PriceHigh extends Component{

constructor(){
    super();
    this.state = {  highPrice: -1 }
}

componentWillMount(){
    fetch('https://www.btcsms.com/news/api')
    .then(results => {
       return results.json();
    }).then(data =>{
    
      //isNaN checks to make sure price.high is actually a number. We want isNaN to be false becasue we want price.high to be a number. 
      if(!isNaN(data.prices.high)){
       this.setState({highPrice: data.prices.high});
      }
    
    
    
    })
    
    }
    
    //We create the renderHighPrice method so that we can put all of our formatting code and html in one place.  
    //if the price is -1. the api fetch has not completed.
    renderHighPrice(highPrice){
      
      //if highPrice is a -1. we want to render --   Otherwise we want to render the price.
      if(highPrice===-1){
        return '--' ;
      }
      return highPrice;
    
    }
    
    
    render(){
    console.log(this);
    console.log(this.state.highPrice);
       return(
         <span>
          {this.renderHighPrice(this.state.highPrice)}
         </span>
       )
    }
    
    
    
    
    }export default PriceHigh