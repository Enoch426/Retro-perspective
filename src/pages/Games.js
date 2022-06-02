import React from 'react';
import MainHeader from '../MainHeader';
import './Games.css';
import Box from '../components/Box';
 
// import Footer from '../components/Footer';

class Games extends React.Component {

    render(){
        return (
            <div>
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
                <Box
               showimage="https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg"
               showName="Sonic 2"
               showLink=""
               showLinkName="Play"
               />

               <Box
               showimage="https://assets1.ignimgs.com/2019/09/04/super-mario-world---button-fin-1567640652381.jpg"
               showName="Super Mario World"
               showLink=""
               showLinkName="Play"
               />

               <Box
               showimage="https://e.snmc.io/lk/lv/x/14fbdad86abe37cc9b838dcc7026288b/9772168"
               showName="Kirby DL 3"
               showLink=""
               showLinkName="Play"
               />

               <Box
               showimage="https://goombastomp.com/wp-content/uploads/2019/04/Super-Metroid-Anniversary.jpg"
               showName="Super Metroid"
               showLink=""
               showLinkName="Play"
               />

                </div>


                </div>

                <div className='gamesFlex2'>

                <Box
               showimage="https://sites.create-cdn.net/siteimages/19/3/4/193478/18/0/0/18005113/468x700.jpg?1580928126"
               showName="Contra"
               showLink=""
               showLinkName="Play"
               />
                
                <Box
               showimage="https://m.media-amazon.com/images/I/51OyomwsXLL.jpg"
               showName="ZAMN"
               showLink=""
               showLinkName="Play"
               />

               <Box
               showimage="https://i.ebayimg.com/images/g/HS0AAMXQlgtS0sTg/s-l640.jpg"
               showName="Galaga"
               showLink=""
               showLinkName="Play"
               />

               <Box
               showimage="https://tetris.wiki/images/e/ee/Tetris_%28Mega_Drive%29_boxart.png"
               showName="Tetris"
               showLink=""
               showLinkName="Play"
               />

               <Box
               showimage="https://images.lukiegames.com/t_300e2/assets/images/GB/gb_pokemon_red_p_5vqvgp.jpg"
               showName="Pokemon Fire red"
               showLink=""
               showLinkName="Play"
               />

                </div>




                

            </div>
        )
    }
}

export default Games;