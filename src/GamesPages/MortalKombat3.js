import React from "react";
import './GamesPage.css'




class MortalKombat3 extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Megaman" src="https://emulatorgames.online/games/sega/ultimate-mortal-kombat-3" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default MortalKombat3;