import React from 'react'
export default class Article extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    
    const article = Object.assign({}, this.props.article);
      
    article.thumb = this.getThumbFromSource(article.source);
    if (!article.thumb) {
      article.thumb = 'btc.png';
    }
    
    this.setState({article: article});
  }

  componentWillUnmount() {}

  getThumbFromSource = (source) => {
    var srcThumbDict = {
      "ccn": "ccn.png",
      "ambcrypto": "amb.png",
      "reddit": "reddit.png",
      "coindesk": "coindesk.png",
      "cointelegraph": "cointelegraph.png",
      "coinninja": "cn.png",
      "coinsquare": "coinsquare.png"

    }

    if (srcThumbDict[source.toLowerCase()]) {
      
      return srcThumbDict[source.toLowerCase()];
    }
    return null;
  }

  componentWillReceiveProps(nextProps) {
  
  }

  
  render() {
    // IMPORTANT  -   We SHOULD be using the external images when possible. Howver,
    // React create app has a quirk that wont allows us to pull in external urls at
    // the moment.
    let article = this.state.article;

    if (article) {
      return (
        <div className="news_articles__wrapper">

          <div className="news_articles__desc">
            <img
              src={require(`../../images/news/${article.thumb}`)}
              alt={article.source}
              style={{
                width: "79px",
                height: "75px"
              }}/>
            <div className="news_articles__title">
              <a href={article.link} rel="nofollow" target="_blank" >{article.title}</a>
            </div>
          </div>
          <div style={{
            clear: "both"
          }}></div>
        </div>
      )
    }else{
      return null;
    }
  }
}
