import React from "react";
import './GamesPage.css'




class Galaga extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Megaman" src="https://emulatorgames.online/games/nes/galaga" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default Galaga;