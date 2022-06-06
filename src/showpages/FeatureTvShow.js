import React from 'react';
import './ShowPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import './TvHeader.css'
import './FeatureTvShow.css'


class FeatureTvShow extends React.Component {
 

  render() {
    return (
      <div>
        
        <div> <p className="featured-title"> {this.props.title1} </p> </div>

        <div className='featured-box'>
                
                <div>
                    <div className='first-featured-show'>
                        <img src={this.props.show1} alt="" />
                    </div>
                </div>



                <div>
                  <div className='featured-show-row'>
                            <div className='featured-show-box'>
                                <img src={this.props.show2} alt="" />
                            </div>
                            
                            <div className='featured-show-box'>
                                <img src={this.props.show3} alt="" />
                            </div>
                            
                            
                  </div>

                  <div className='featured-show-row'>
                           <div className='featured-show-box'>
                                <img src={this.props.show4} alt="" />
                            </div>
                            
                            <div className='featured-show-box'>
                            <img src={this.props.show5} alt="" />
                            </div>
                              
                  </div>    
                </div>

        </div>





        

        
               
      </div>

      

    )
  }
}
export default FeatureTvShow ;