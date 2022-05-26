import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

class ShowPage extends React.Component {


  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#page-top">Home Books</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a class="nav-link" href="#about">Products</a></li>
              <li className="nav-item"><a class="nav-link" href="#projects">Story</a></li>
              <li className="nav-item"><a class="nav-link" href="#signup">Delivery</a></li>
              <li className="nav-item"><a class="nav-link" href="#FAQ">FAQ</a></li>
          </ul>
              

          

                <div className="form">
                  <i className="fa fa-search"></i>
                  <div className='flex'>
                  <input type="text" class="form-control form-input" placeholder="Search anything..."/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </div>
                  <span className="left-pan"><i class="fa fa-microphone"></i></span>
                </div>

                <h1 style="color: green">
                    showpage 
                </h1>


      </div>
  </div>
 </nav>

 
        
        
      </div>

      

    )
  }
}
export default ShowPage;