import React from "react";
import './GamesPage.css'




class SuperMetroid extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Super Metroid" src="https://emulatorgames.online/games/snes/super-metroid" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default SuperMetroid;