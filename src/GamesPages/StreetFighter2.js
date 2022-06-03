import React from "react";
import './GamesPage.css'




class StreetFighter2 extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Street Fighter" src="https://emulatorgames.online/games/snes/street-fighter-2-turbo-hyper-fighting" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default StreetFighter2;