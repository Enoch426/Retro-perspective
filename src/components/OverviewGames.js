import React from "react";
import './OverviewGames.css';
import {Card} from 'react-bootstrap';









class OverviewGames extends React.Component {
    render() {
      return (
        <div className="backgroundGames">
            <div className="boarder">
                <div className="secondborder">

            <div className="textdiv">
                <h1 className="gameTitle">Explore Retro Games</h1>
                <p className="smallText"> lorem episum bla bla abljslifo aoifnaodf nodifunaioufn dfoiaofn fn;onf;eon f;ew j;ilj;j;io;f;qioj;rgh;iuhag; ;sig;oif g;gf; gfijg; fg;fsdiojg ;fg; fd;g fd;g fd;jg;f g;fjg;df;gfgujf; g;fig;fd jg;ofdg;oif g;fg; fgjiorjg; rwgo;aoi;  akldfhl;dj f;ajfa; fds;oifhad;of ;dofds;o faoijf;o df;iajf; f;oief;of;onew;nfu;erf ;riof;eornf;eroa;ifberl f</p>
            
            
            </div>


            <div className="flex">
        <Card  className="firstCard">
            <Card.Img variant="top" src="https://assets-prd.ignimgs.com/2021/12/14/sf2-1639444728524.png" className="firstImage"/>
            <Card.Body>
                <Card.Title >Street Fighter 2</Card.Title>
                <Card.Text>
                
                </Card.Text>
               
            </Card.Body>
        </Card>

            <div className="secondFlex">

        <Card className="smallCards">
            <Card.Img variant="top" src="https://i.etsystatic.com/29860154/r/il/842d76/3302809352/il_570xN.3302809352_fwlr.jpg" className="smallImages"/>
            <Card.Body>
                <Card.Title className="ptag">Mortal Kombat</Card.Title>
                <Card.Text>
                
                </Card.Text>
                
            </Card.Body>
        </Card>



        <Card className="smallCards">
            <Card.Img variant="top" src="https://static.wikia.nocookie.net/megaman/images/a/ac/RMWorldWilyWars.jpg" className="smallImages" />
            <Card.Body>
                <Card.Title className="ptag">Megaman</Card.Title>
                <Card.Text>
                
                </Card.Text>
                
            </Card.Body>
        </Card>



        <Card className="smallCards">
            <Card.Img variant="top" src="https://i.ebayimg.com/images/g/HS0AAMXQlgtS0sTg/s-l640.jpg" className="smallImages"/>
            <Card.Body>
                <Card.Title className="ptag">Galaga</Card.Title>
                <Card.Text>
                
                </Card.Text>
                
            </Card.Body>
        </Card>



        <Card className="smallCards">
            <Card.Img variant="top" src="https://tetris.wiki/images/e/ee/Tetris_%28Mega_Drive%29_boxart.png" className="smallImages" />
            <Card.Body>
                <Card.Title className="ptag">Tetris</Card.Title>
                <Card.Text>
                
                </Card.Text>
                
            </Card.Body>
        </Card>

        
        
        <Card className="smallCards">
            <Card.Img variant="top" src="https://e.snmc.io/lk/o/x/058f5dccea3fb03c64cd5f51b495c49e/6735444" className="smallImages" />
            <Card.Body>
                <Card.Title className="ptag">Legend Of Zelda MC</Card.Title>
                <Card.Text>
                
                </Card.Text>
                
            </Card.Body>
        </Card>




        <Card className="smallCards">
            <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BZjM5NzRlZmItM2Y1Mi00MTNhLTlhZTEtZWNhN2U5M2U3NzBlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg" className="smallImages" />
            <Card.Body>
                <Card.Title className="ptag">Pokemon Fire Red</Card.Title>
                <Card.Text>
                
                </Card.Text>
                
            </Card.Body>
        </Card>



    
        </div>

        </div>


        </div>

        </div>

        </div>
        )
    }
  }
  export default OverviewGames;