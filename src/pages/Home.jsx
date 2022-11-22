import { NavLink } from 'react-router-dom';

function Home() {

  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container border 1">
          <div className="row">
            <div className="col-lg-8 text-center text-lg-start">
              <NavLink to="/products" className="btn btn-outline-light">Comprar</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div >
        <h1 className="text-center" >
          <span className="font-text">
          Sets más vendidos
          </span>
        </h1>
      </div><br />


      <div className="container mb-5">
        <div className="row">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">

        <div className="carousel-inner">
          <div className="carousel-item active">
          <div class="contenedor">
            <div className="profile-card-2">
            <img src="https://firebasestorage.googleapis.com/v0/b/chihuahua-grill.appspot.com/o/ecommerce%2Fdestructor_1.png?alt=media&token=d623d256-2baa-4d1d-9f67-062c2aab4bc3" className="d-block w-50;" alt="..." />
            <div className="profile-name">Destructor Estelar Imperial</div>
            </div>

            <div className="profile-card-2">
            <img src="https://firebasestorage.googleapis.com/v0/b/chihuahua-grill.appspot.com/o/ecommerce%2Fhalcon_1.png?alt=media&token=23522d5a-3826-49e6-9723-0e356dbcf802" className="d-block w-50;" alt="..." />
            <div className="profile-name">Millennium Falcon</div>
            </div>

            </div>
          </div>
          <div className="carousel-item">
          <div class="contenedor">
          <div className="profile-card-2">
            <img src="https://firebasestorage.googleapis.com/v0/b/chihuahua-grill.appspot.com/o/ecommerce%2Frazor_1.png?alt=media&token=2ca8e0e0-bb9a-4c28-9dba-06562b8b8bf5" className="d-block w-50;" alt="..." />
            <div className="profile-name">The Razor Crest</div>
            </div>
            <div className="profile-card-2">
            <img src="https://firebasestorage.googleapis.com/v0/b/chihuahua-grill.appspot.com/o/ecommerce%2Frepublica_1.png?alt=media&token=2dceb4e6-afb8-49c7-8c36-db3ce8811cca" className="d-block w-50;" alt="..." />
            <div className="profile-name">Cañonera de la República</div>
            </div>
          </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
      </div>



    </>
  )
}

export default Home
