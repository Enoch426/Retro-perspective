import React from "react";
import './GamesPage.css'




class Contra extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Megaman" src="https://emulatorgames.online/games/nes/contra" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default Contra;