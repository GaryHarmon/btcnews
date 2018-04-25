import React from 'react';

import Article from './Article';



export default class LatestNews extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
   
    this.setState({articles: []})
    let url = 'https://www.btcsms.com/news/api';
    //let url = '/news.json';
     fetch(url)
      .then(r => r.json())
      .then(res => this.updateInitialArticles(res.news_arr))
      .catch(error => this.updateInitialArticles([]))
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateInitialArticles(articles) {
    
    this.setState({articles: articles})
    this.doTimer(articles)
  }



  doTimer(articles) {
    this.timer = setInterval(() => {
      let temp = articles.pop()
      articles.unshift(temp)
      this.setState({articles: articles})
    }, 15000)
  }

  renderArticles(articles) {
    
    if (articles && articles.length) {
      let sliced = articles
      
      return sliced.map((article, index) => <Article article={article} thumb={article.thumb || null} key={index}/>)
    } else {
      return 'Loading Articles...'
    }
  }

  render() {
    
    return (
      
      <div className="container-fluid " id="newscontainter" >
            <div className="d-flex flex-wrap justify-content-center " style={{flexDirection: "row"}} id="card_flex">
{this.renderArticles(this.state.articles)}

            </div>

        </div>
     
      
    )
  }
}
