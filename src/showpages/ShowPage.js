import React from 'react';
import './ShowPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainHeader from '../MainHeader';
import TvHeader from './TvHeader';
import FeatureTvShow from './FeatureTvShow';

class ShowPage extends React.Component {


  render() {
    return (
      <div>
      <TvHeader 
         backgroundimgclass="showHead"
      />
      <FeatureTvShow 
      title1 = "Anime Shows"
      show1 = "https://i.imgur.com/sae0koy.jpg"
      show2 = "https://i.imgur.com/Zx1LoTY.png"
      show3 = "https://i.imgur.com/if0Di39.png"
      show4 = "https://i.imgur.com/tFYaGBy.png"
      show5 = "https://i.imgur.com/bReosOL.jpg"
      
      />

      <FeatureTvShow 
       title1 = "Live Shows"
       show1 = "https://i.imgur.com/qHEeTdw.png"
       show2 = "https://i.imgur.com/Qs12TCk.png"
       show3 = "https://i.imgur.com/oQSd94t.png"
       show4 = "https://i.imgur.com/H77EX1v.png"
       show5 = "https://i.imgur.com/cORbC0Q.jpg"
       
      />


               
      </div>

      

    )
  }
}
export default ShowPage;