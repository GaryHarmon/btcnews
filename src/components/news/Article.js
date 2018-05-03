import React from 'react'
import Oval from "../../images/ovalx.svg"
export default class Article extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    
    let article = Object.assign({}, this.props.article);
    
    article.noExternalThumb = false;
    if(article.thumb===""){  
      article.thumb = this.getThumbFromSource(article.source);
      article.noExternalThumb = true;
    }
    article.logo = this.getThumbFromSource(article.source);
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
    return "btc.png";
  }

  componentWillReceiveProps(nextProps) {
    let article = Object.assign({}, this.props.article);
    
    article.noExternalThumb = false;
    if(article.thumb===""){  
      article.thumb = this.getThumbFromSource(article.source);
      article.noExternalThumb = true;
    }
    article.logo = this.getThumbFromSource(article.source)
    this.setState({article: article});
  
  }
  renderTitle(title){
    
    var length = 100;
    var trimmedString = title.length > length ? 
    title.substring(0,  length -3) + "..." : 
    title;
    return trimmedString;
  }
  renderThumb(article){
    
    if(article.noExternalThumb===true){
      
      return ( <img src={require(`../../images/news/${article.thumb}`)} alt={article.source} />)
    }else{
      return (<img src={article.thumb} alt={article.source} style={{height:"79", width: "70"}}/>)
    }
  }
  renderLogo(article){
    
  
      
      return ( <img src={require(`../../images/news/newslogos/logo-${article.logo}`)} alt={article.source} />)
  
  }

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
        <div className="card mb-4 box-shadow ninjanews">
          <div className="card-body  text-center">
          {this.renderThumb(article2)}
            <h6 className="card-title2" id="newstitle' + id + '">{this.renderTitle(article2.title)}</h6>
            <p className="card-text " id="newsdesc' + id + '">{article2.desc}
            </p>
            <div className="align-left"><h6>
            <a 
                  href={article2.link}
                  id={`newslink ${article2.id}`}
                  target="_blank"
                  role="button"
                  className="">Read More</a>
                  </h6>
                  </div>
                  
          </div>
          < div className="card-footer">
            <div className=" justify-content-between  align-text-bottom h-100  row">
              
              
              < div className="col-6 text-left">
            
              {this.renderLogo(article2)}
              
            </div >
              <div className="col-6 text-right">
                <button
                  id={`newshidebutton${article2.id}`}
                  newsid={article2.id}
                  role="button"
                  className=" btn-outline-light"> <img src={Oval}/>
                </button>
              </div>
              
            </div>
            < div className="row">
              <div className="col-12 text-center">
                <small className="text-muted" id={`newsnewtime ${article2.id}`}>
                  {article2.pub_time}</small>
              </div>
            </div>
            
          </div>
        </div>
      )
    } else{
      return null
    }
  }
    
    }