import React from 'react';
import './ShowPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import './TvHeader.css'


class TvHeader extends React.Component {


  render() {
    return (
      <div>
        
        

        <div className={this.props.backgroundimgclass}>

        <div>
            <p className="tvheader-title"> TV Shows </p>
        </div>
    
    
        </div>


        
               
      </div>

      

    )
  }
}
export default TvHeader;