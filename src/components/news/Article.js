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

  componentWillReceiveProps(nextProps) {}

  render() {
    // IMPORTANT  -   We SHOULD be using the external images when possible. Howver,
    // React create app has a quirk that wont allows us to pull in external urls at
    // the moment. let article = this.state.article;
    let article=null
     let article2 = this.state.article;
    //   "id": "2297",
    //   "title": "I found the first person going to buy just 100 satoshis from an ATM in Zimbabwe!",
    //   "desc": "",
    //   "link": "https://i.redd.it/vzger5oahpr01.jpg",
    //   "thumb": "https://b.thumbs.redditmedia.com/Nd1JoiVHnnLFC1gEzxpGscIeDGFZSCuFn7Gh6Ck_aTE.jpg",
    //   "pub_time": "1523645043",
    //   "added": "1523645043",
    //   "source": "reddit",
    //   "hidden": "0",
    //   "new_time": "51 minutes ago",
    //   "num": 2
    // }
   
   if (article2){

   
      return (
        <div className="card mb-4 box-shadow">
          <div className="card-body  text-center">
          <img
              src={require(`../../images/news/${article2.thumb}`)}
              alt={article2.source}
              style={{
              width: "158px",
              height: "150px",
              
            }}/>
            <h6 className="card-title" id="newstitle' + id + '">{article2.title}</h6>
            <p className="card-text " id="newsdesc' + id + '">{article2.desc}
            </p>
          </div>
          < div className="card-footer">
            <div className=" justify-content-between  align-text-bottom h-100  row">
              <div className="col-6">
                <a
                  href={article2.link}
                  id={`newslink ${article2.id}`}
                  target="_blank"
                  role="button"
                  className="btn btn-sm btn-success">View</a>
              </div>
              <div className="col-6 text-right">
                <button
                  id={`newshidebutton${article2.id}`}
                  newsid={article2.id}
                  role="button"
                  className=" hide-button btn btn-sm btn-secondary"> X
                </button>
              </div>
            </div>
            < div className="row">
              <div className="col-6">
                <small className="text-muted" id={`newsnewtime ${article2.id}`}>
                  {article2.pub_time}</small>
              </div>
            </div>
            < div className="col-6 text-right">
              <small className="text-muted">{article2.source}</small>
            </div >
          </div>
        </div>
      )
    } else{
      return null
    }
  }
    
    }