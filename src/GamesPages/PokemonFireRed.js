import React from "react";
import './GamesPage.css'




class PokemonFireRed extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Pokemon Fire Red" src="https://emulatorgames.online/games/gba/pokemon-fire-red-version" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default PokemonFireRed;