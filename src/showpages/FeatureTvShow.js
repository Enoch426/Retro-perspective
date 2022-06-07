import React from 'react';
import './ShowPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import './TvHeader.css'
import './FeatureTvShow.css'
import {
    Link
} from 'react-router-dom'


class FeatureTvShow extends React.Component {
 

  render() {
    return (
      <div>
        
        <div> <p className="featured-title"> Anime Shows </p> </div>

        <div className='featured-box'>
                
                
                <div>
                    <div className='first-featured-show'>
                      <Link to="/Anime/DragonBallZ">  <img src="https://i.imgur.com/sae0koy.jpg" alt="" /> </Link>
                    </div>
                </div>
                



                <div>
                  <div className='featured-show-row'>
                            <div className='featured-show-box'>
                            <Link to="/Anime/CowboyBebop">  <img src="https://i.imgur.com/Zx1LoTY.png" alt="" /> </Link>
                            </div>
                            
                            <div className='featured-show-box'>
                            <Link to="/Anime/SailorMoon"> <img src="https://i.imgur.com/if0Di39.png" alt="" /> </Link>
                            </div>
                            
                            
                  </div>

                  <div className='featured-show-row'>
                           <div className='featured-show-box'>
                           <Link to="/Anime/OnePiece">   <img src="https://i.imgur.com/tFYaGBy.png" alt="" /> </Link>
                            </div>
                            
                            <div className='featured-show-box'>
                            <Link to="/Anime/Sakura"> <img src="https://i.imgur.com/bReosOL.jpg" alt="" /> </Link>
                            </div>
                              
                  </div>    
                </div>

        </div>





        

        
               
      </div>

      

    )
  }
}
export default FeatureTvShow ;