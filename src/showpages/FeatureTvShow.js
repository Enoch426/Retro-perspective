import React from 'react';
import './ShowPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import './TvHeader.css'
import './FeatureTvShow.css'


class FeatureTvShow extends React.Component {
 

  render() {
    return (
      <div>
        
        <div> <p className="featured-title"> Anime Shows </p> </div>

        <div className='featured-box'>
                
                <div>
                    <div className='first-featured-show'>
                        <img src="https://i.imgur.com/L9gGFBh.png" alt="" />
                    </div>
                </div>



                <div>
                  <div className='featured-show-row'>
                            <div className='featured-show-box'>
                                <img src="https://i.imgur.com/yW4n5Q9.png" alt="" />
                            </div>
                            
                            <div className='featured-show-box'>
                                <img src="https://i.imgur.com/9C4JXrp.jpg" alt="" />
                            </div>
                            
                            
                  </div>

                  <div className='featured-show-row'>
                           <div className='featured-show-box'>
                                <img src="https://i.imgur.com/n07tO21.jpg" alt="" />
                            </div>
                            
                            <div className='featured-show-box'>
                            <img src="https://i.imgur.com/rEjy9Y0.png" alt="" />
                            </div>
                              
                  </div>    
                </div>

        </div>

        
               
      </div>

      

    )
  }
}
export default FeatureTvShow ;