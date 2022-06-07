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
      
      
            <div class={this.props.backclass}>

            <iframe class="video-frame" width="660" height="415" src={this.props.VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            </div>
      


               
      </div>

      

    )
  }
}
export default SingleShowPage;