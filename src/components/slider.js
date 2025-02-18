import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/1.jpg" className="d-block w-100" alt="Slide 1" style={{maxHeight:"500px"}} />
        </div>
        <div className="carousel-item">
          <img src="images/2.jpg" className="d-block w-100" alt="Slide 2"  style={{maxHeight:"500px"}}/>
        </div>
        <div className="carousel-item">
          <img src="images/3.jpg" className="d-block w-100" alt="Slide 3"  style={{maxHeight:"500px"}}/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
