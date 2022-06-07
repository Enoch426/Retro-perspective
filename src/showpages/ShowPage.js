import React from 'react';
import './ShowPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainHeader from '../MainHeader';
import TvHeader from './TvHeader';
import FeatureTvShow from './FeatureTvShow';
import FeatureLiveTvShows from './FeatureLiveTVShows';

class ShowPage extends React.Component {


  render() {
    return (
      <div>
      <TvHeader 
         backgroundimgclass="showHead"
      />
      <FeatureTvShow />

      <FeatureLiveTvShows />



               
      </div>

      

    )
  }
}
export default ShowPage;