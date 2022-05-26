import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';


class Header extends React.Component {


  render() {
    return (
      <div>
        {/* <Router> */}
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container px-4 px-lg-5">
  {/* <Link to='/Home'>*/}<a className="navbar-brand" href="#page-top">Home</a>{/*</Link>*/} 
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
          {/* <Link to='/shows'> */} <li className="nav-item"><a class="nav-link" href="#about">Shows</a></li>{/*</Link>*/}
          {/*<Link to='/games'>*/}<li className="nav-item"><a class="nav-link" href="#projects">Games</a></li>{/*</Link>*/}
           {/*<Link to='/more'>*/}<li className="nav-item"><a class="nav-link" href="#signup">Comics</a></li>{/*</Link>*/}
          </ul>
          

          

                <div className="form">
                  <i className="fa fa-search"></i>
                  <div className='flex'>
                  <input type="text" class="form-control form-input" placeholder="Search anything..."/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </div>
                  <span className="left-pan"><i class="fa fa-microphone"></i></span>
                </div>


      </div>
  </div>
 </nav>

          {/* <Routes>

          <Route path="/shows" element={<Home />} />

          <Route path="/games" element={<About />} /> 

          <Route path="/more" element={<Contact />} />

          </Routes>
 </Router> */}
 
        
        
      </div>

      

    )
  }
}
export default Header;