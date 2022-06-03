import React from "react";
import './GamesPage.css'




class ZAMN extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Zombies Ate my Neigbors" src="https://emulatorgames.online/games/snes/zombies-ate-my-neighbors" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default ZAMN;