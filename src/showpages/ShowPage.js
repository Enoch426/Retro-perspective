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
      <FeatureTvShow />



               
      </div>

      

    )
  }
}
export default ShowPage;