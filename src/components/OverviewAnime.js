import React from "react";
import './OverviewShows.css';
import Box from "./Box";




class OverviewAnime extends React.Component {
    render() {
      return (
        <div className="body">
          <p className="title">Anime Shows</p>
            <div className="box">

               <Box
               showimage="https://www.mobygames.com/images/covers/l/207286-bishojo-senshi-sailor-moon-genesis-front-cover.png"
               showName="Sailor Moon"
               description1="The magical action-adventures of a teenage girl who learns of her destiny as the legendary warrior Sailor Moon."
               showLink=""
               showLinkName="View More"
               />
               

               <Box
               showimage="https://pbs.twimg.com/media/ErD5JacW8AIe9bT.jpg:large"
               showName="Dragon Ball Z"
               description1="The epic episodic adventure of Goku and the Z Warriors as they defend the Earth and the Universe from super-powered fighters and monsters."
               showLink=""
               showLinkName="View More"
               />

               <Box
               showimage="https://i.pinimg.com/736x/17/e5/59/17e559a643dc11a58eafe2798d719792.jpg"
               showName="Cowboy Bepop"
               description1="The Solar System is linked by a network of hyperspace gateways. Police lose their grasp on crime and a bounty hunting system has been implemented.."
               showLink=""
               showLinkName="View More"
               />

               <Box
               showimage="https://external-preview.redd.it/A45ODbzXJGXinSKqELTkP5LbwYgAHygC652TN7cSFFQ.png?auto=webp&s=abf41bd1490798fd69c2ec0fe6fa71891f0ae55c"
               showName="One Piece"
               description1="Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become king of all pirates."
               showLink=""
               showLinkName="View More "
               />

               <Box
               showimage="https://m.media-amazon.com/images/M/MV5BYThkZTBiN2UtZWJkMC00NzQ1LTg4ODktYjlhN2UwMTYzZWVhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_FMjpg_UX1000_.jpg"
               showName="Cardcaptor Sakura"
               description1="Sakura Kinomoto, an elementary school student who discovers magical powers after accidentally freeing a set of magical cards into the world"
               showLink=""
               showLinkName="View More"
               />





              

            </div>
        
            <a href={this.props.showView} className="viewMore">View More</a>
        </div>
      )
    }
  }
  export default OverviewAnime;