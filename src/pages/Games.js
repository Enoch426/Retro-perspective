import React from 'react';
import MainHeader from '../MainHeader';
import './Games.css';
import Box from '../components/Box';
// import MegamanPage from '../GamesPages/MegamanPage';
import '../App.css';


import {
    Link
  } from 'react-router-dom';
  
  
 
// import Footer from '../components/Footer';

class Games extends React.Component {

    render(){
        return (
            <div className='videoBackground'>
              <MainHeader
              backgroundimgclass="grid"
              backgroundimg="https://images.nintendolife.com/1560ca8db4c46/1280x720.jpg"
              backgroundimg1="https://cdn.videogamesblogger.com/wp-content/uploads/2011/05/mortal-kombat-3-logo-small.jpg"
              backgroundimg2="https://images2.alphacoders.com/585/585983.jpg"
              /> 

                <div className='gamesGrid'> 
                <div className='text'>
                    <h1>Popular Games In the 90's</h1>
                </div>


        
            <div className='gamesFlex'>
                <Link to='/games/sonic2'><Box
               showimage="https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg"
               showName="Sonic 2"
                showLink=""
               showLinkName="Play"
               /></Link>

                <Link to='/games/megaman'> <Box 
               showimage="https://static.wikia.nocookie.net/megaman/images/a/ac/RMWorldWilyWars.jpg"
               showName="MegaMan"
               showLinkName='Play'
               /></Link>

                <Link to='/games/superMario'><Box
               showimage="https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png"
               showName="super Mario World"
               showLink=""
               showLinkName="Play"
               /></Link>

                <Link to='/games/superMetroid'><Box
               showimage="https://goombastomp.com/wp-content/uploads/2019/04/Super-Metroid-Anniversary.jpg"
               showName="Super Metroid"
               showLink=""
               showLinkName="Play"
               /></Link>

                </div>


                </div>

                <div className='gamesFlex2'>

                <Link to='/games/contra'><Box
               showimage="https://sites.create-cdn.net/siteimages/19/3/4/193478/18/0/0/18005113/468x700.jpg?1580928126"
               showName="Contra"
               showLink=""
               showLinkName="Play"
               /></Link>
                
                <Link to='/games/zombiesAteMyNeighbor'><Box
               showimage="https://m.media-amazon.com/images/I/51OyomwsXLL.jpg"
               showName="ZAMN"
               showLink=""
               showLinkName="Play"
               /></Link>


               <Link to='/games/galaga'><Box
               showimage="https://i.ebayimg.com/images/g/HS0AAMXQlgtS0sTg/s-l640.jpg"
               showName="Galaga"
               showLink=""
               showLinkName="Play"
               /></Link>


               <Link to='/games/tetris'><Box
               showimage="https://tetris.wiki/images/e/ee/Tetris_%28Mega_Drive%29_boxart.png"
               showName="Tetris"
               showLink=""
               showLinkName="Play"
               /></Link>


               <Link to='/games/pokemonFireRed'><Box
               showimage="https://images.lukiegames.com/t_300e2/assets/images/GB/gb_pokemon_red_p_5vqvgp.jpg"
               showName="Pokemon Fire red"
               showLink=""
               showLinkName="Play"
               /></Link>

                </div>

            </div>
        )
    }
}

export default Games;