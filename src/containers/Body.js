import React from 'react';
export class Body extends React.Component {
    render() {
        var divStyle = {
            color: 'white',
            backgroundImage: '../src/images/BTC.png'
        };
        return  (
            <div className="center">
              <h2>Latest News</h2>
              <div id="latest-news"><LatestNews></LatestNews></div>
            </div>
      
      
          )
    }

}