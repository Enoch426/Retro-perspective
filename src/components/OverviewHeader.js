import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap'



class OverviewHeader extends React.Component {
    render() {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="5000">
      <img src="https://www.fbcoverlover.com/maker/covers-images/download/friends-2-Facebook-Covers-FBcoverlover-facebook-cover.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-interval="5000">
      <img src="https://www.hellomagazine.com/imagenes/film/20220215133198/fresh-prince-of-bel-air-cast-where-are-they-now-details/0-648-143/fresh-prince-bel-air-t.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F08%2Ftcdthse_ec024_h-2000.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
      
            
      
    </div>
  );
}
}

export default OverviewHeader;