import React from "react";
import './GamesPage.css'




class Tetris extends React.Component {

    render(){
        return (
            <div className="bodyGames">
                <div id='outerdiv'>
                    <iframe title="Tetris" src="https://emulatorgames.online/games/gb/tetris" className='inneriframe' scrolling="no"> </iframe>
                    </div>

            
            </div>

        )
    }
}

export default Tetris;