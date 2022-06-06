import React from 'react';
import './SingleShowPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainHeader from '../MainHeader';
import TvHeader from './TvHeader';
import FeatureTvShow from './FeatureTvShow';

class SingleShowPage extends React.Component {


  render() {
    return (
      <div>
      
      
            <div class="single-background">

            <iframe class="video-frame" width="660" height="415" src="https://www.youtube.com/embed/zVxBIYQ5XUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            </div>
      


               
      </div>

      

    )
  }
}
export default SingleShowPage;