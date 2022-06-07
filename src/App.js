import './App.css';
// import MainHeader from './MainHeader';
import Header from './Header';
import Home from './pages/Home';
// import OverviewShows from './components/OverviewShows';
// import OverviewAnime from './components/OverviewAnime';
// import OverviewHeader from './components/OverviewHeader';
// import 'bootstrap/dist/css/bootstrap.css';
// import OverviewGames from './components/OverviewGames';
import Footer from './components/Footer';
// import Shows from './components/Shows';
import Games from './pages/Games';
import MegamanPage from './GamesPages/MegamanPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import Sonic2 from './GamesPages/Sonic2';
import SuperMarioWorld from './GamesPages/SuperMarioWorld';
import SuperMetroid from './GamesPages/SuperMetroid';
import ZAMN from './GamesPages/ZAMN';
import Galaga from './GamesPages/Galaga';
import Tetris from './GamesPages/Tetris';
import PokemonFireRed from './GamesPages/PokemonFireRed';
import Contra from './GamesPages/Contra';
import StreetFighter2 from './GamesPages/StreetFighter2';
import MortalKombat3 from './GamesPages/MortalKombat3';
import ZeldaMinishCap from './GamesPages/ZeldaMinishCap';
import ShowPage from './showpages/ShowPage';
import DragonBallZ from './PageForShows/DragonBallZ';
import CowboyBebop from './PageForShows/CowboyBebop';
import OnePiece from './PageForShows/OnePiece';
import SailorMoon from './PageForShows/SailorMoon';
import Sakura from './PageForShows/Sakura';
import That70sShow from './PageForShows/That70sShow';
import Friends from './PageForShows/Friends';
import FamilyMatters from './PageForShows/FamilyMatters';
import FreshPrince from './PageForShows/FreshPrince';
import Sistersister from './PageForShows/Sistersister';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header className='Header'/>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/shows" element={<Shows/>} /> */}



            <Route path="/shows" element={<ShowPage />} />

            <Route path="/games" element={<Games/>} />
            <Route path="/games/megaman" element={<MegamanPage/>} />
            <Route path="/games/sonic2" element={<Sonic2/>}/>
            <Route path="/games/superMario" element={<SuperMarioWorld/>}/>
            <Route path="/games/superMetroid" element={<SuperMetroid/>}/>
            <Route path="/games/contra" element={<Contra/>}/>
            <Route path="/games/zombiesAteMyNeighbor" element={<ZAMN/>}/>
            <Route path="/games/galaga" element={<Galaga/>}/>
            <Route path="/games/tetris" element={<Tetris/>}/>
            <Route path="/games/pokemonFireRed" element={<PokemonFireRed/>}/>
            <Route path="/games/streetFighter2" element={<StreetFighter2/>}/>
            <Route path="/games/mortalKombat3" element={<MortalKombat3/>}/>
            <Route path="/games/legendOfZeldaMinishCap" element={<ZeldaMinishCap/>}/>
            <Route path="/Anime/DragonBallZ" element={<DragonBallZ/>}/>
            <Route path="/Anime/CowboyBebop" element={<CowboyBebop/>}/>
            <Route path="/Anime/OnePiece" element={<OnePiece/>}/>
            <Route path="/Anime/SailorMoon" element={<SailorMoon />}/>
            <Route path="/Anime/Sakura" element={<Sakura />}/>



            <Route path="shows" element={<ShowPage />} />





          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
