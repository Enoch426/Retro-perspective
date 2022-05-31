import React from 'react';
import './MainHeader.css';






class MainHeader extends React.Component {


    render() {
      return (
<div className={this.props.backgroundimgclass}>
  <img src={this.props.backgroundimg}/>
  <img src={this.props.backgroundimg1}/>
  <img src={this.props.backgroundimg2}/>

    
    
</div>
      )
      }

    }

export default MainHeader;