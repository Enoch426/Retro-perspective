import React from "react";
import './GamesPage.css'




class MegamanPage extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Megaman" src="https://emulatorgames.online/games/sega/megaman-the-wily-wars" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default MegamanPage;