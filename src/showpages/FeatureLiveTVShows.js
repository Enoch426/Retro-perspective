import React from 'react';
import './ShowPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import './TvHeader.css'
import './FeatureTvShow.css'
import {
    Link
} from 'react-router-dom'


class FeatureLiveTvShows extends React.Component {
 

  render() {
    return (
      <div>
        
        <div> <p className="featured-title"> Sitcoms </p> </div>

        <div className='featured-box'>
                
                
                <div>
                    <div className='first-featured-show'>
                        <img src="https://i.imgur.com/9iqYVaA.png" alt="" />
                    </div>
                </div>
                



                <div>
                  <div className='featured-show-row'>
                            <div className='featured-show-box'>
                                <img src="https://i.imgur.com/o3XWaoR.png" alt="" />
                            </div>
                            
                            <div className='featured-show-box'>
                                <img src="https://i.imgur.com/mAHUdPz.png" alt="" />
                            </div>
                            
                            
                  </div>

                  <div className='featured-show-row'>
                           <div className='featured-show-box'>
                                <img src="https://i.imgur.com/9EvV0XU.png" alt="" />
                            </div>
                            
                            <div className='featured-show-box'>
                            <img src="https://i.imgur.com/s8w6ELv.jpg" alt="" />
                            </div>
                              
                  </div>    
                </div>

        </div>





        

        
               
      </div>

      

    )
  }
}
export default FeatureLiveTvShows  ;