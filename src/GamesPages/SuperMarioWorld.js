import React from "react";
import './GamesPage.css'




class SuperMarioWorld extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Super Mario World" src="https://emulatorgames.online/games/snes/super-mario-world" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default SuperMarioWorld;