import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap';
import {Carousel} from 'react-bootstrap';
import './OverviewHeader.css';




class OverviewHeader extends React.Component {
    render() {
  return (
    <div className={this.props.divclass}>
  

<Carousel fade>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={this.props.image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{this.props.description1}</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={this.props.image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>{this.props.description2}</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={this.props.image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{this.props.description3}</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
      
    </div>
  );
}
}

export default OverviewHeader;