import React from 'react'
import banner from '../../Images/turf.jpeg';
const Herosection = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center bg-light p-5">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 g-0 p-2 bg-light ">
              <div className='my-5'>
                <h4 >Choose Your <span className='text-warning'>Ground</span></h4>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className='my-3'>
                  <h4 className='heading_caption'>Find Grounds <span className='text-warning'>@ Your Nearest</span></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 g-0 bg-light">
              <div className="container">
                <div id="carouselExampleCaptions" class="carousel slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div class="carousel-inner top-fixed">
                    <div class="carousel-item active">
                      <img src={banner} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={banner} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src={banner} class="d-block w-100" alt="..." />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Herosection