import React from 'react';
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

import LatestNews from '../../components/news/LatestNews';

//import {fetchLatestBlocks} from '../../store/blocks/actions';

export class DashboardPage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      showNav: false
    }
  }

  componentWillMount() {
  console.log(this.props);
  }

  render() {

    return (
      <div className="center">
        <h2>Latest News</h2>
        <div id="latest-news"><LatestNews></LatestNews></div>
      </div>


    )
  }
}

export default  DashboardPage