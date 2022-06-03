import React from "react";
import './GamesPage.css'




class ZeldaMinishCap extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Zelda Minish Cap" src="https://emulatorgames.online/games/gba/the-legend-of-zelda-the-minish-cap" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default ZeldaMinishCap;