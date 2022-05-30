import React from 'react';
// import Header from '../Header';
import MainHeader from '../MainHeader';
import OverviewShows from '../components/OverviewShows';
import OverviewAnime from '../components/OverviewAnime';
import OverviewHeader from '../components/OverviewHeader';
import 'bootstrap/dist/css/bootstrap.css';
import OverviewGames from '../components/OverviewGames';
import '../App.css';


class Home extends React.Component {
    render() {
  return (
    <div>
     
      <MainHeader/>
      <OverviewHeader
      divclass='black'
      image1='https://www.fbcoverlover.com/maker/covers-images/download/friends-2-Facebook-Covers-FBcoverlover-facebook-cover.jpg'
      description1='Friends'
      image2='https://img.huffingtonpost.com/asset/5bb464cd2200004301dc18f2.jpeg?ops=scalefit_720_noupscale'
      description2='Fresh Prince'
      image3='https://i.ytimg.com/vi/tX7uQGY77uE/maxresdefault.jpg'
      description3='Family Matters'
      />
      <OverviewShows/>
      <OverviewHeader
      divclass='black'
      image1='https://cdn.wallpapersafari.com/56/28/ZC8QSr.jpeg'
      description1='Dragon Ball Z'
      image2='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/sailor-moon-anniversary.jpg?q=50&fit=contain&w=960&h=480&dpr=1.5'
      description2='Sailor Moon'
      image3='https://data.1freewallpapers.com/download/cowboy-bebop-characters-at-the-coffee-shop.jpg'
      description3='Cowboy Bebop'
      />
      <OverviewAnime/>
      <OverviewGames/>


      
      
      
      
    </div>
  );
}
}

export default Home;