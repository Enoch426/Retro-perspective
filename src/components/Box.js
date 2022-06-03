import React from "react";
import './OverviewShows.css';






class Box extends React.Component {
    render() {
      return (
        <div>
            
            <div className="ui-card">
                <img src ={this.props.showimage}/>
                    <div className="description">
                        <h3>{this.props.showName}</h3>
                        <p>{this.props.description1}</p>
                        <a href={this.props.showLink}>{this.props.showLinkName}</a>
                    </div>
            </div> 
            
        
          
        </div>
      )
    }
  }
  export default Box;