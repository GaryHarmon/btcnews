import React from "react"
export default class Highlow extends React.Component {
    constructor() {
      super()
      
    }
render(){
    return(
    <div className="right-align ">
        <a href="#" class="btn btn-md  btn-secondary btn-danger " id="lowdiv">$6,786</a>
         <a href="#" class="btn btn-md btn-secondary btn-success " id="highdiv">$7,989</a>
    </div>)
}
}
